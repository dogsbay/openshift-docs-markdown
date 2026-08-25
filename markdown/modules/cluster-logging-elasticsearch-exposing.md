{%- set _mod_docs_content_type = "PROCEDURE" %}
# Exposing the log store service as a route {id="cluster-logging-elasticsearch-exposing_{{ context }}"}

By default, the log store that is deployed with {{ logging }} is not accessible from outside the logging cluster. You can enable a route with re-encryption termination for external access to the log store service for those tools that access its data.

Externally, you can access the log store by creating a reencrypt route, your {{ product_title }} token and the installed log store CA certificate. Then, access a node that hosts the log store service with a cURL request that contains:

*   The `Authorization: Bearer ${{ token }}`{minja}
*   The Elasticsearch reencrypt route and an [Elasticsearch API request](https://www.elastic.co/guide/en/elasticsearch/reference/current/api-conventions.html).

Internally, you can access the log store service using the log store cluster IP,
which you can get by using either of the following commands:

```terminal
$ oc get service elasticsearch -o jsonpath={.spec.clusterIP} -n openshift-logging
```

```terminal title="Example output"
172.30.183.229
```

```terminal
$ oc get service elasticsearch -n openshift-logging
```

```terminal title="Example output"
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
elasticsearch   ClusterIP   172.30.183.229   <none>        9200/TCP   22h
```

You can check the cluster IP address with a command similar to the following:

```terminal
$ oc exec elasticsearch-cdm-oplnhinv-1-5746475887-fj2f8 -n openshift-logging -- curl -tlsv1.2 --insecure -H "Authorization: Bearer ${token}" "https://172.30.183.229:9200/_cat/health"
```

```terminal title="Example output"
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100    29  100    29    0     0    108      0 --:--:-- --:--:-- --:--:--   108
```

**Prerequisites**

*   The Red Hat OpenShift Logging and Elasticsearch Operators must be installed.
*   You must have access to the project to be able to access to the logs.

**Procedure**

To expose  the log store externally:

1.  Change to the `openshift-logging` project:
    ```terminal
    $ oc project openshift-logging
    ```
1.  Extract the CA certificate from the log store and write to the **_admin-ca_** file:
    ```terminal
    $ oc extract secret/elasticsearch --to=. --keys=admin-ca
    ```
    ```terminal title="Example output"
    admin-ca
    ```
1.  Create the route for the log store service as a YAML file:
    1.  Create a YAML file with the following:
        ```yaml
        apiVersion: route.openshift.io/v1
        kind: Route
        metadata:
          name: elasticsearch
          namespace: openshift-logging
        spec:
          host:
          to:
            kind: Service
            name: elasticsearch
          tls:
            termination: reencrypt
            destinationCACertificate: | (1)
        ```
        1.  Add the log store CA certifcate or use the command in the next step. You do not have to set the `spec.tls.key`, `spec.tls.certificate`, and `spec.tls.caCertificate` parameters required by some reencrypt routes.
    1.  Run the following command to add the log store CA certificate to the route YAML you created in the previous step:
        ```terminal
        $ cat ./admin-ca | sed -e "s/^/      /" >> <file-name>.yaml
        ```
    1.  Create the route:
        ```terminal
        $ oc create -f <file-name>.yaml
        ```
        ```terminal title="Example output"
        route.route.openshift.io/elasticsearch created
        ```
1.  Check that the Elasticsearch service is exposed:
    1.  Get the token of this service account to be used in the request:
        ```terminal
        $ token=$(oc whoami -t)
        ```
    1.  Set the **elasticsearch** route you created as an environment variable.
        ```terminal
        $ routeES=`oc get route elasticsearch -o jsonpath={.spec.host}`
        ```
    1.  To verify the route was successfully created, run the following command that accesses Elasticsearch through the exposed route:
        ```terminal
        curl -tlsv1.2 --insecure -H "Authorization: Bearer ${token}" "https://${routeES}"
        ```

        The response appears similar to the following:
        ```json title="Example output"
        {
          "name" : "elasticsearch-cdm-i40ktba0-1",
          "cluster_name" : "elasticsearch",
          "cluster_uuid" : "0eY-tJzcR3KOdpgeMJo-MQ",
          "version" : {
          "number" : "6.8.1",
          "build_flavor" : "oss",
          "build_type" : "zip",
          "build_hash" : "Unknown",
          "build_date" : "Unknown",
          "build_snapshot" : true,
          "lucene_version" : "7.7.0",
          "minimum_wire_compatibility_version" : "5.6.0",
          "minimum_index_compatibility_version" : "5.0.0"
        },
          "<tagline>" : "<for search>"
        }
        ```