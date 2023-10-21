
const city = document.getElementById("city");
const cityName = document.getElementById("cityName ");
const condition = document.getElementById("condition");
const warm = document.getElementById("warm");
const rain = document.getElementById("rain");
fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-698186EB-77CB-4457-9F87-E07217211E88")
.then(
    function(response){
        return response.json()
    }
)
//.then(response =>response.json())
.then(
   function(data)  {
      weatherInfo = data; 
    })


function print(num){
    console.log(weatherInfo.records.location[num].locationName)
    let cityN =weatherInfo.records.location[num].locationName;
    return  cityN;
}

getValueButton.addEventListener('change', () => {
    const selectedOption = city.options[city.selectedIndex];
    const selectedOptionValue = selectedOption.value;
    selectedValue.textContent = `所选选项的值为: ${selectedOptionValue}`;
});

    