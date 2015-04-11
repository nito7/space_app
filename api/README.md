#テーブル定義


##衛星(Satellite)
<table>
  <tr>
    <td>id</td>
    <td>integer(2)</td>
  </tr>
  <tr>
    <td>name</td>
    <td>varchar(64)</td>
  </tr>
</table>

##エネルギー帯
<table>
  <tr>
    <td>id</td>
    <td>integer(2)</td>
  </tr>
  <tr>
    <td>name</td>
    <td>varchar(32)</td>
  </tr>
</table>

##天体種別
<table>
  <tr>
    <td>id</td>
    <td>integer(2)</td>
  </tr>
  <tr>
    <td>name</td>
    <td>varchar(128)</td>
  </tr>
</table>

##天体(Astro Obj)
<table>
  <tr>
    <td>id</td>
    <td>integer(4)</td>
  </tr>
  <tr>
    <td>name</td>
    <td>varchar(128)</td>
  </tr>
  <tr>
    <td>ra</td>
    <td>float(7, 3)</td>
  </tr>
  <tr>
    <td>dec</td>
    <td>float(7, 3)</td>
  </tr>
  <tr>
    <td>astro_class_id</td>
    <td>integer(2)</td>
  </tr>
  <tr>
    <td>link</td>
    <td>varchar(2048)</td>
  </tr>
</table>


##光度曲線(Light Curve)
<table>
  <tr>
    <td>id</td>
    <td>integer(100)</td>
  </tr>
  <tr>
    <td>astro_obj_id</td>
    <td>integer(4)</td>
  </tr>
  <tr>
    <td>satellite_id</td>
    <td>integer(2)</td>
  </tr>
  <tr>
    <td>band_id</td>
    <td>integer(2)</td>
  </tr>
  <tr>
    <td>mjd</td>
    <td>float(9, 3)</td>
  </tr>
  <tr>
    <td>flux</td>
    <td>float(8, 5)</td>
  </tr>
  <tr>
    <td>err</td>
    <td>float(8, 5)</td>
  </tr>
</table>

##ウォッチ対象(Watch)
<table>
  <tr>
    <td>id</td>
    <td>integer(8)</td>
  </tr>
  <tr>
    <td>mjd</td>
    <td>float(9, 3)</td>
  </tr>
  <tr>
    <td>astro_obj_id</td>
    <td>integer(4)</td>
  </tr>
  <tr>
    <td>flux_rate</td>
    <td>float(8, 2)</td>
  </tr>
  <tr>
    <td>mjd</td>
    <td>float(9, 3)</td>
  </tr>
  <tr>
    <td>flux</td>
    <td>float(8, 5)</td>
  </tr>
</table>


