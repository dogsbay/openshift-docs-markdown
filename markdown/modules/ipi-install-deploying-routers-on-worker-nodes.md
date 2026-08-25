{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying routers on compute nodes {id="deploying-routers-on-worker-nodes_{{ context }}"}

During installation, the installation program deploys router pods on compute nodes. By default, the installation program installs two router pods. If a deployed cluster requires additional routers to handle external traffic loads destined for services within the {{ product_title }} cluster, you can create a `yaml` file to set an appropriate number of router replicas. {._abstract}


:::important

Deploying a cluster with only one compute node is not supported. While modifying the router replicas will address issues with the `degraded` state when deploying with one compute node, the cluster loses high availability for the ingress API, which is not suitable for production environments.

:::



:::note

By default, the installation program deploys two routers. If the cluster has no compute nodes, the installation program deploys the two routers on the control plane nodes by default.

:::


**Procedure**

1.  Create a `router-replicas.yaml` file:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: IngressController
    metadata:
      name: default
      namespace: openshift-ingress-operator
    spec:
      replicas: <num-of-router-pods>
      endpointPublishingStrategy:
        type: HostNetwork
      nodePlacement:
        nodeSelector:
          matchLabels:
            node-role.kubernetes.io/worker: ""
    ```

    :::note

    Replace `<num-of-router-pods>` with an appropriate value. If working with just one compute node, set `replicas:` to `1`. If working with more than 3 compute nodes, you can increase `replicas:` from the default value `2` as appropriate.
    
    :::

1.  Save and copy the `router-replicas.yaml` file to the `clusterconfigs/openshift` directory:
    ```terminal
    $ cp ~/router-replicas.yaml clusterconfigs/openshift/99_router-replicas.yaml
    ```