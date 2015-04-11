<?php

class gps {
    public function distance($lat1, $lon1, $lat2, $lon2) {
        $kilometersRatio = 1.609344;
        $distance = (3958*3.1415926*sqrt(($lat2-$lat1)*($lat2-$lat1) + cos($lat2/57.29578)*cos($lat1/57.29578)*($lon2-$lon1)*($lon2-$lon1))/180);
        return $distance * $kilometersRatio;
    }
}

$gps1 = new gps();

print($gps1->distance(-30.054074, -50.836312, -30.031665, -50.781859) . 'k<br>');

?>

