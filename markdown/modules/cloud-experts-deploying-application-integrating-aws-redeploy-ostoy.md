{%- set _mod_docs_content_type = "PROCEDURE" %}
# Redeploying the OSToy app with the new service account {id="cloud-experts-deploying-application-integrating-aws-redeploy-ostoy_{{ context }}"}

After creating the new service account, you need to redeploy the OSToy app. {._abstract}

**Procedure**

1.  Run your pod with the service account you created.
1.  Deploy the microservice by running the following command:
    ```terminal
    $ - oc apply -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/ostoy-microservice-deployment.yaml
    ```
1.  Deploy the `ostoy-frontend` by running the following command:
    ```terminal
    $ - oc apply -f https://raw.githubusercontent.com/openshift-cs/rosaworkshop/master/rosa-workshop/ostoy/yaml/ostoy-frontend-deployment.yaml
    ```
1.  Patch the `ostoy-frontend` deployment by running the following command:
    ```terminal
    $ oc patch deploy ostoy-frontend -n ${OSTOY_NAMESPACE} --type=merge --patch '{"spec": {"template": {"spec":{"serviceAccount":"ostoy-sa"}}}}'
    ```

    **Example output**
    ```terminal
    spec:
      # Uncomment to use with ACK portion of the workshop
      # If you chose a different service account name please replace it.
      serviceAccount: ostoy-sa
      containers:
      - name: ostoy-frontend
        image: quay.io/ostoylab/ostoy-frontend:1.6.0
        imagePullPolicy: IfNotPresent
    [...]
    ```
1.  Wait for the pod to update.