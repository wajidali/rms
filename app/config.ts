/**
 * Created by Wajid on 5/19/2017.
 */
export class config {

    public static getEnvironmentVariable(): configData{
        var environment:string;
        var data: configData= {endPoint:''};
        environment = window.location.hostname;

        switch (environment) {
            case'localhost':
                data.endPoint = 'http://localhost:51364/';
                break;
            case 'fitsme.azurewebsites.net':
                data.endPoint =  'http://fitsmeservice.azurewebsites.net/';
                break;
            default:
                data.endPoint =  'http://localhost:51364/';
        }

        return data;
    }
}

interface configData{
    endPoint: string
}