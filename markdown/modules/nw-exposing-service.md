{% if context == "configuring-ingress-cluster-traffic-nodeport" %}
{%- set nodeport = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exposing the service by creating a route {id="nw-exposing-service_{{ context }}"}

To enable external access to your application that runs on {{ product_title }}, you can expose the service as a route by using the `oc expose` command. {._abstract}

**Prerequisites**

*   You logged into {{ product_title }}.

**Procedure**

1.  Log in to the project where the service you want to expose is located:
    ```terminal
    $ oc project <project_name>
    ```

{% if not nodeport %}
1.  Run the `oc expose service` command to expose the route:
    ```terminal
    $ oc expose service nodejs-ex
    ```
    ```terminal title="Example output"
    route.route.openshift.io/nodejs-ex exposed
    ```
1.  To verify that the service is exposed, you can use a tool, such as `curl` to check that the service is accessible from outside the cluster.
    1.  To find the hostname of the route, enter the following command:
        ```terminal
        $ oc get route
        ```
        ```terminal title="Example output"
        NAME        HOST/PORT                        PATH   SERVICES    PORT       TERMINATION   WILDCARD
        nodejs-ex   nodejs-ex-myproject.example.com         nodejs-ex   8080-tcp                 None
        ```
    1.  To check that the host responds to a GET request, enter the following command:
        ```terminal title="Example curl command"
        $ curl --head nodejs-ex-myproject.example.com
        ```
        ```terminal title="Example output"
        HTTP/1.1 200 OK
        ...
        ```

{% endif %}
{% if nodeport %}
1.  To expose a node port for the application, modify the custom resource definition (CRD) of a service by entering the following command:
    ```terminal
    $ oc edit svc <service_name>
    ```
    ```yaml title="Example output"
    spec:
      ports:
      - name: 8443-tcp
        nodePort: 30327
        port: 8443
        protocol: TCP
        targetPort: 8443
      sessionAffinity: None
      type: NodePort
    ```
    *   `nodePort`: Optional parameter. Specifies the node port range for the application. By default, {{ product_title }} selects an available port in the `30000-32767` range.
    *   `type`: Specifies the service type.
1.  Optional: To confirm the service is available with a node port exposed, enter the following command:
    ```terminal
    $ oc get svc -n myproject
    ```
    ```terminal title="Example output"
    NAME                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
    nodejs-ex           ClusterIP   172.30.217.127   <none>        3306/TCP         9m44s
    nodejs-ex-ingress   NodePort    172.30.107.72    <none>        3306:31345/TCP   39s
    ```
1.  Optional: To remove the service created automatically by the `oc new-app` command, enter the following command:
    ```terminal
    $ oc delete svc nodejs-ex
    ```

**Verification**

*   To check that the service node port is updated with a port in the `30000-32767` range, enter the following command:
    ```terminal
    $ oc get svc
    ```

    In the following example output, the updated port is `30327`:
    ```terminal title="Example output"
    NAME    TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
    httpd   NodePort   172.xx.xx.xx    <none>        8443:30327/TCP   109s
    ```
{% endif %}

{% if nodeport %}
{%- set nodeport = false -%}
{% endif %}