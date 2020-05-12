<template>
  <div class=''>
    <h5>文件对象上传</h5>
    <input type="file" @change="handleFileChange" ref="inputer" isvalid="yes"/>
    <h5>vue-highcharts</h5>
    <div>
      <Highcharts :options="options" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      UploadFile: {
        file: null
      },
      options: {
        chart: {
          type: 'packedbubble',
          height: '400px',
          spacingBottom: 80,
          spacingTop: 20,
          spacingLeft: 20,
          spacingRight: 20
        },
        title: {
            text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
        },
        subtitle: {
            text: '数据来源：thesolarfoundation.com'
        },
        legend: {
          enabled: false
        },
        // tooltip: {
        //   useHTML: true,
        //   pointFormat: '<b>{point.name}:</b> {point.y}m CO<sub>2</sub>'
        // },
        plotOptions: {
          packedbubble: {
              minSize: '30%',
              maxSize: '120%',
              zMin: 0,
              zMax: 1000,
              layoutAlgorithm: {
                  splitSeries: false,
                  gravitationalConstant: 0.02
              },
              dataLabels: {
                  enabled: true,
                  format: '{point.name}',
                  // formatter: (item) => {
                  //   console.log(888, item)
                  //   return 888
                  // },
                  filter: {
                      property: 'y',
                      operator: '>',
                      value: 250
                  },
                  style: {
                      color: 'black',
                      textOutline: 'none',
                      fontWeight: 'normal'
                  }
              }
          }
        },
        series: [{
          data: [{
              name: 'Germany',
              value: 767.1
          }, {
              name: 'Croatia',
              value: 20.7
          },
          {
              name: 'Belgium',
              value: 97.2
          },
          {
              name: 'Czech Republic',
              value: 111.7
          }]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
      }
    };
  },
  methods: {
    handleFileChange (e) {
      let inputDOM = this.$refs.inputer;
      this.UploadFile.file = inputDOM.files[0];
      console.log(666, this.UploadFile.file, inputDOM)
      var objUrl = this.getObjectURL(this.UploadFile.file) ; // 获取图片的路径，该路径不是图片在本地的路径
      console.log(999, objUrl)
      if (objUrl) {
        // $("#pic").attr("src", objUrl) ; //将图片路径存入src中，预览出图片
      }
    },
    getObjectURL(file) {
      var url = null ;
      if (window.createObjectURL !== undefined) { // basic
        url = window.createObjectURL(file) ;
      } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL !== undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }
      return url ;
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
