{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a single NodePort service to an Ingress Controller {id="nw-ingress-controller-nodeportservice-projects_{{ context }}"}

To prevent port conflicts, instead of creating a `NodePort`-type `Service` for each project, create a custom Ingress Controller that can use the `NodePortService` endpoint publishing strategy.  {._abstract}

Consider this configuration for your Ingress Controller when you want to apply a set of routes, through Ingress sharding, to nodes that might already have a `HostNetwork` Ingress Controller.  

Before you set a `NodePort`-type `Service` for each project, read the following considerations:

*   You must create a wildcard DNS record for the `Nodeport` Ingress Controller domain. A Nodeport Ingress Controller route can be reached from the address of a worker node. For more information about the required DNS records for routes, see "User-provisioned DNS requirements".
*   You must expose a route for your service and specify the `--hostname` argument for your custom Ingress Controller domain.
*   You must append the port that is assigned to the `NodePort`-type `Service` in the route so that you can access application pods. 

**Prerequisites**

*   You installed the {{ oc_first }}.
*   Logged in as a user with `cluster-admin` privileges.
*   You created a wildcard DNS record.

**Procedure**

1.  Create a custom resource (CR) file for the Ingress Controller:
    ```yaml title="Example of a CR file that defines information for the IngressController object"
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: <custom_ic_name>
      namespace: openshift-ingress-operator
    spec:
      replicas: 1
      domain: <custom_ic_domain_name>
      nodePlacement:
        nodeSelector:
          matchLabels:
            <key>: <value>
      namespaceSelector:
        matchLabels:
          <key>: <value>
      endpointPublishingStrategy:
        type: NodePortService 
    # ...
    ```

    where:

    `metadata.name`
    :   Specifies a custom `name` for the `IngressController` CR.

    `spec.domain`
    :   Specifies the DNS name that the Ingress Controller services. For example, the default ingresscontroller domain is `apps.ipi-cluster.example.com`, so you would specify the `<custom_ic_domain_name>` as `nodeportsvc.ipi-cluster.example.com`.

    `nodeSelector.matchLabels.<key>`
    :   Specifies the label for the nodes that include the custom Ingress Controller.

    `namespaceSelector.matchLabels.<key>`
    :   Specifies the label for a set of namespaces. Substitute `<key>:<value>` with a map of key-value pairs where `<key>` is a unique name for the new label and `<value>` is its value. For example: `ingresscontroller: custom-ic`.

1.  Add a label to a node by using the `oc label node` command:
    ```terminal
    $ oc label node <node_name> <key>=<value>
    ```
    *   `<key>=<value>`: Where `<value>` must match the key-value pair specified in the `nodePlacement` section of your `IngressController` CR.
1.  Create the `IngressController` object:
    ```terminal
    $ oc create -f <ingress_controller_cr>.yaml
    ```
1.  Find the port for the service created for the `IngressController` CR:
    ```terminal
    $ oc get svc -n openshift-ingress
    ```
    ```terminal title="Example output that shows port 80:32432/TCP for the router-nodeport-custom-ic3 service"
    NAME                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                                     AGE
    router-internal-default      ClusterIP   172.30.195.74    <none>        80/TCP,443/TCP,1936/TCP                     223d
    router-nodeport-custom-ic3   NodePort    172.30.109.219   <none>        80:32432/TCP,443:31366/TCP,1936:30499/TCP   155m
    ```
1.  To create a new project, enter the following command:
    ```terminal
    $ oc new-project <project_name>
    ```
1.  To label the new namespace, enter the following command:
    ```terminal
    $ oc label namespace <project_name> <key>=<value>
    ```
    *   `<key>=<value>`:: Where `<key>=<value>` must match the value in the `namespaceSelector` section of your Ingress Controller CR.
1.  Create a new application in your cluster:
    ```terminal
    $ oc new-app --image=<image_name>
    ```
    *   `<image_name>`: An example of `<image_name>` is `quay.io/openshifttest/hello-openshift:multiarch`.
1.  Create a `Route` object for a service, so that the pod can use the service to expose the application external to the cluster.
    ```terminal
    $ oc expose svc/<service_name> --hostname=<svc_name>-<project_name>.<custom_ic_domain_name>
    ```

    :::note

    You must specify the domain name of your custom Ingress Controller in the `--hostname` argument. If you do not do this, the Ingress Operator uses the default Ingress Controller to serve all the routes for your cluster. 
    
    :::

1.  Check that the route has the `Admitted` status and that it includes metadata for the custom Ingress Controller:
    ```terminal
    $ oc get route/hello-openshift -o json | jq '.status.ingress'
    ```
    ```terminal title="Example output"
    # ...
    {
      "conditions": [
        {
          "lastTransitionTime": "2024-05-17T18:25:41Z",
          "status": "True",
          "type": "Admitted"
        }
      ],
      [
        {
          "host": "hello-openshift.nodeportsvc.ipi-cluster.example.com",
          "routerCanonicalHostname": "router-nodeportsvc.nodeportsvc.ipi-cluster.example.com",
          "routerName": "nodeportsvc", "wildcardPolicy": "None"
        }
      ],
    }
    ```
1.  Update the default `IngressController` CR to prevent the default Ingress Controller from managing the `NodePort`-type `Service`. The default Ingress Controller will continue to monitor all other cluster traffic.
    ```terminal
    $ oc patch --type=merge -n openshift-ingress-operator ingresscontroller/default --patch '{"spec":{"namespaceSelector":{"matchExpressions":[{"key":"<key>","operator":"NotIn","values":["<value>]}]}}}'
    ```

**Verification**

1.  Verify that the DNS entry can route inside and outside of your cluster by entering the following command. The command outputs the IP address of the node that received the label from running the `oc label node` command earlier in the procedure.
    ```terminal
    $ dig +short <svc_name>-<project_name>.<custom_ic_domain_name>
    ```
1.  To verify that your cluster uses the IP addresses from external DNS servers for DNS resolution, check the connection of your cluster by entering the following command:
    ```terminal
    $ curl <svc_name>-<project_name>.<custom_ic_domain_name>:<port> (1)
    ```
    *   `<custom_ic_domain_name>:<port>`: Where `<port>` is the node port from the `NodePort`-type `Service`. Based on example output from the `oc get svc -n openshift-ingress` command, the `80:32432/TCP` HTTP route means that `32432` is the node port.
        ```terminal title="Output example"
        Hello OpenShift!
        ```