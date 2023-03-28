export function getForecast(latitude, longitude) {
    // https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&hourly=temperature_2m,apparent_temperature,rain,showers&timeformat=unixtime
    return new Promise((res) => {
        res(londonForecast);
    });
}

const londonForecast = {
  latitude: 51.5,
  longitude: -0.120000124,
  generationtime_ms: 0.23996829986572266,
  utc_offset_seconds: 0,
  timezone: "GMT",
  timezone_abbreviation: "GMT",
  elevation: 29.0,
  hourly_units: { time: "unixtime", temperature_2m: "°C", rain: "mm" },
  hourly: {
    time: [
      1679875200, 1679878800, 1679882400, 1679886000, 1679889600, 1679893200,
      1679896800, 1679900400, 1679904000, 1679907600, 1679911200, 1679914800,
      1679918400, 1679922000, 1679925600, 1679929200, 1679932800, 1679936400,
      1679940000, 1679943600, 1679947200, 1679950800, 1679954400, 1679958000,
      1679961600, 1679965200, 1679968800, 1679972400, 1679976000, 1679979600,
      1679983200, 1679986800, 1679990400, 1679994000, 1679997600, 1680001200,
      1680004800, 1680008400, 1680012000, 1680015600, 1680019200, 1680022800,
      1680026400, 1680030000, 1680033600, 1680037200, 1680040800, 1680044400,
      1680048000, 1680051600, 1680055200, 1680058800, 1680062400, 1680066000,
      1680069600, 1680073200, 1680076800, 1680080400, 1680084000, 1680087600,
      1680091200, 1680094800, 1680098400, 1680102000, 1680105600, 1680109200,
      1680112800, 1680116400, 1680120000, 1680123600, 1680127200, 1680130800,
      1680134400, 1680138000, 1680141600, 1680145200, 1680148800, 1680152400,
      1680156000, 1680159600, 1680163200, 1680166800, 1680170400, 1680174000,
      1680177600, 1680181200, 1680184800, 1680188400, 1680192000, 1680195600,
      1680199200, 1680202800, 1680206400, 1680210000, 1680213600, 1680217200,
      1680220800, 1680224400, 1680228000, 1680231600, 1680235200, 1680238800,
      1680242400, 1680246000, 1680249600, 1680253200, 1680256800, 1680260400,
      1680264000, 1680267600, 1680271200, 1680274800, 1680278400, 1680282000,
      1680285600, 1680289200, 1680292800, 1680296400, 1680300000, 1680303600,
      1680307200, 1680310800, 1680314400, 1680318000, 1680321600, 1680325200,
      1680328800, 1680332400, 1680336000, 1680339600, 1680343200, 1680346800,
      1680350400, 1680354000, 1680357600, 1680361200, 1680364800, 1680368400,
      1680372000, 1680375600, 1680379200, 1680382800, 1680386400, 1680390000,
      1680393600, 1680397200, 1680400800, 1680404400, 1680408000, 1680411600,
      1680415200, 1680418800, 1680422400, 1680426000, 1680429600, 1680433200,
      1680436800, 1680440400, 1680444000, 1680447600, 1680451200, 1680454800,
      1680458400, 1680462000, 1680465600, 1680469200, 1680472800, 1680476400,
    ],
    temperature_2m: [
      4.6, 4.2, 3.8, 4.1, 3.9, 3.4, 3.0, 3.0, 3.8, 5.2, 6.4, 7.5, 8.9, 9.5,
      10.0, 10.2, 10.2, 10.1, 9.5, 8.6, 7.1, 6.3, 5.4, 4.9, 4.7, 4.5, 4.5, 4.7,
      4.9, 5.2, 5.5, 5.8, 6.5, 7.3, 8.1, 9.0, 9.5, 10.0, 9.7, 8.7, 9.0, 9.1,
      9.2, 9.1, 9.1, 9.2, 9.1, 8.7, 8.7, 8.5, 8.5, 8.8, 8.8, 9.1, 9.4, 9.8,
      10.3, 10.8, 11.2, 12.0, 12.7, 13.5, 14.8, 15.2, 14.1, 13.9, 13.5, 12.7,
      12.6, 12.7, 12.6, 12.0, 12.0, 11.8, 11.5, 11.3, 11.2, 11.1, 10.9, 11.0,
      11.4, 12.4, 13.6, 13.9, 13.5, 13.5, 13.6, 14.8, 14.4, 13.9, 12.8, 12.1,
      11.3, 10.5, 10.2, 10.1, 10.1, 10.0, 10.1, 10.1, 10.2, 10.2, 10.3, 10.4,
      10.5, 10.7, 11.0, 11.3, 11.7, 12.0, 12.2, 12.4, 12.3, 12.1, 11.7, 11.5,
      11.2, 10.8, 10.6, 10.3, 10.1, 10.0, 10.0, 9.9, 9.8, 9.7, 9.7, 9.7, 9.8,
      10.1, 10.6, 11.3, 11.9, 12.3, 12.8, 13.2, 13.1, 12.7, 12.1, 11.6, 11.0,
      10.2, 9.8, 9.4, 8.9, 8.4, 7.9, 7.3, 6.9, 6.5, 6.3, 6.7, 7.3, 8.2, 8.7,
      9.0, 9.5, 10.0, 10.4, 10.8, 10.6, 10.3, 9.7, 9.2, 8.8, 8.2, 8.0, 7.8,
    ],
    rain: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.1, 0.5, 0.3, 0.6, 0.6, 0.1, 0.0, 0.0, 0.1, 0.6, 0.0, 0.1, 0.0, 0.4, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 1.0,
      0.3, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.3, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.4, 0.4, 0.1, 0.1, 0.1, 0.1, 0.1,
      0.1, 0.3, 0.3, 0.3, 0.1, 0.1, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1,
      0.1, 0.4, 0.4, 0.4, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.1, 0.1, 0.1, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.0, 0.0,
      0.0, 0.2, 0.2,
    ],
  },
};