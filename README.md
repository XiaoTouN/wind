# 风速数据（GRIB2 格式）下载和处理

## 1. 下载数据

* 下载地址：https://nomads.ncep.noaa.gov/pub/data/nccf/com/gfs/prod/
* 下载命令：

```bash
wget xxxxxx -OutFile xxxxx.grib2
```

## 2. 提取数据

* 裁剪数据(参数 `100:120 20:40` 为裁剪经纬度范围 `minLon:maxLon minLat:maxLat`)

```bash
wgrib2 xxxxx.grib2 -match ":UGRD:10 m" -small_grib 100:120 20:40 ugrd_subset.grb2
```

* 提取10m高度风u数据：

```bash
wgrib2 xxxxx.grib2 -match ":UGRD:10 m above ground:" -text xxx.ugrd.txt
```

* 提取10m高度风v数据：

```bash
wgrib2 xxxxx.grib2 -match ":VGRD:10 m above ground:" -text xxx.vgrd.txt
```

## 3. 数据转换

* 将提取的uv文本数据转为json数据
* 将uv两份json数据转为位图数据
* 将位图数据转为png图片

```bash
node ./src/scripts/index.js
```

## 4. 渲染
```js
 addImageWind(
  layerId,
  mapboxgl.Map,
  picUrl,
  [
    [-21,-70],[121,10]
  ],
  true,
)
```