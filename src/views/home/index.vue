<template>
  <div>
    home 欢迎页~
    <div v-html="xss(content1)"></div>
    <div v-html="xss(content2)"></div>
  </div>
</template>
<script>
import xss from 'xss';
import geohash from 'geohash';

export default {
  data() {
    return {
      content1: '<img src="no" onerror="alert(44)">',
      content2: '<a onclick="alert(222)">链接</a>',
      xss
    };
  },
  created() {
    const geoHash = geohash.GeoHash.encodeGeoHash(60.456, 120.867);
    console.log(666, geoHash);
    const lg = geohash.GeoHash.decodeGeoHash(geoHash);
    console.log(666, lg);
  }
}
</script>

