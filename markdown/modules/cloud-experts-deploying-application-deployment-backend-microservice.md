{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the back-end microservice {id="cloud-experts-deploying-application-deployment-backend-microservice_{{ context }}"}

The microservice serves internal web requests and returns a JSON object containing the current hostname and a randomly generated color string. {._abstract}

**Procedure**

*   Deploy the microservice by running the following command from your terminal:
    ```terminal
    $ oc apply -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/ostoy-microservice-deployment.yaml
    ```

    **Example output**
    ```terminal
    $ oc apply -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/ostoy-microservice-deployment.yaml
    deployment.apps/ostoy-microservice created
    service/ostoy-microservice-svc created
    ```