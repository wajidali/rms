/**
 * Created by Wajid on 5/19/2017.
 */
export class config {

    public static getEnvironmentVariable() {
        var environment:string;
        var data: configData;
        environment = window.location.hostname;
        switch (environment) {
            case'http://localhost:3000':

                    data.endPoint= 'http://localhost:51364/'

                break;
            case 'http://fitsme.azurewebsites.net':
                data.endPoint=  'http://fitsmeservice.azurewebsites.net/'

                break;

            default:
                data.endPoint=  'http://localhost:51364/'

        }
        return data;
    }
}

interface configData{
    endPoint: string
}