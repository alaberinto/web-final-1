var xhr = new XMLHttpRequest();
var xmldoc;
var searchType;
window.onload = loadXML;

function loadXML()
{    
    document.getElementById("search").addEventListener("keyup", function() { findClient(this.value);}, false);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            xmldoc = xhr.responseXML;
        }
    };
    xhr.open("GET", "dataset.xml", true);
    xhr.send();
    setSearch();
}

function setSearch()
{
    searchType = document.getElementById("type").value;
}

function findClient(value)
{
    //clear
    var table = document.getElementById("employees");
    while (table.firstChild)
    {
        table.removeChild(table.firstChild);
    }
    
    //if no values, show as empty
    if(!value)
    {
        while (table.firstChild)
        {
            table.removeChild(table.firstChild);
        }
    }
    else
    {
        //record to search for
        var record;

        var r = xmldoc.getElementsByTagName("employee");

        if(searchType == "id")
        {
            for (var i = 0; i < r.length; i++)
            {
                var record = r[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;

                if(record.startsWith(value))
                {
                    //last
                    var output = document.createElement("tr");
                    var data = document.createElement("td");
                    var text = document.createTextNode(r[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                    
                    //first
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                    
                    //id
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                    
                    //company
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("company")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                    
                    //job
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                    
                    //phone
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                }
            }
        }
        else if(searchType == "last")
        {
            for (var i = 0; i < r.length; i++)
            {
                record = r[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue;

                if(record.startsWith(value))
                {
                    //last
                    var output = document.createElement("tr");
                    var data = document.createElement("td");
                    var text = document.createTextNode(r[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //first
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //id
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                    
                    //company
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("company")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //job
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //phone
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                }
            }
        }
        else if(searchType == "job")
        {
            for (var i = 0; i < r.length; i++)
            {
                record = r[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue;

                if(record.startsWith(value))
                {
                    //last
                    var output = document.createElement("tr");
                    var data = document.createElement("td");
                    var text = document.createTextNode(r[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //first
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //id
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //company
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("company")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //job
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);

                    //phone
                    data = document.createElement("td");
                    text = document.createTextNode(r[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue);
                    data.appendChild(text);
                    output.appendChild(data);
                    table.appendChild(output);
                }
            }
        }
    }
}