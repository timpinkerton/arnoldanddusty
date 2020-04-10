$(document).ready(function () {

    const covidGlobal = "https://covidapi.info/api/v1/global"

    $.getJSON(covidGlobal, function (data) {

        let date = `Global Covid Stats as of: ${data.date}`
        $("#date").html(date)

        let confirmed = `${data.result.confirmed} Confirmed Cases`
        $("#confirmed").html(confirmed)

        let deaths = `${data.result.deaths} Deaths`
        $("#deaths").html(deaths)

        let recovered = `${data.result.recovered} Recovered`
        $("#recovered").html(recovered)
    });   

});