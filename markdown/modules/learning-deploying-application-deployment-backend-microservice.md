{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the back-end microservice {id="learning-deploying-application-deployment-backend-microservice_{{ context }}"}

You can deploy a microservice to start the OSToy backend processes. The microservice serves internal web requests and returns a JSON object containing the current hostname and a randomly generated color string. {._abstract}

**Procedure**

*   Deploy the microservice by running the following command:
    ```terminal
    $ oc apply -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/ostoy-microservice-deployment.yaml
    ```

    **For example**:
    ```terminal
    $ oc apply -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/ostoy-microservice-deployment.yaml
    deployment.apps/ostoy-microservice created
    service/ostoy-microservice-svc created
    ```