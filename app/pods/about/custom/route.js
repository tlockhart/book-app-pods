import Route from '@ember/routing/route';

export default class AboutCustomRoute extends Route {
    model(params){
        // debugger
        //Get the custom_string url parameter defined in the model
        return params.custom_string;
    }
}