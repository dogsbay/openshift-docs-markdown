{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitoring OVN-Kubernetes health by using readiness probes {id="nw-ovn-kubernetes-readiness-probes_{{ context }}"}

To monitor OVN-Kubernetes component health in {{ product_title }}, you can review readiness probe configuration and status for `ovnkube-control-plane` and `ovnkube-node` pods. {._abstract}

**Prerequisites**

*   Access to the OpenShift CLI (`oc`).
*   You have access to the cluster with `cluster-admin` privileges.
*   You have installed `jq`.

**Procedure**

1.  Review the details of the `ovnkube-node` readiness probe by running the following command:
    ```terminal
    $ oc get pods -n openshift-ovn-kubernetes -l app=ovnkube-node \
    -o json | jq '.items[0].spec.containers[] | .name,.readinessProbe'
    ```

    The readiness probe for the northbound and southbound database containers in the `ovnkube-node` pod checks for the health of the databases and the `ovnkube-controller` container.


    The `ovnkube-controller` container in the `ovnkube-node` pod has a readiness probe to verify the presence of the OVN-Kubernetes CNI configuration file, the absence of which would indicate that the pod is not running or is not ready to accept requests to configure pods.
1.  Show all events including the probe failures, for the namespace by using the following command:
    ```terminal
    $ oc get events -n openshift-ovn-kubernetes
    ```
1.  Show the events for just a specific pod:
    ```terminal
    $ oc describe pod ovnkube-node-9lqfk -n openshift-ovn-kubernetes
    ```
1.  Show the messages and statuses from the cluster network operator:
    ```terminal
    $ oc get co/network -o json | jq '.status.conditions[]'
    ```
1.  Show the `ready` status of each container in `ovnkube-node` pods by running the following script:
    ```terminal
    $ for p in $(oc get pods --selector app=ovnkube-node -n openshift-ovn-kubernetes \
    -o jsonpath='{range.items[*]}{" "}{.metadata.name}'); do echo === $p ===;  \
    oc get pods -n openshift-ovn-kubernetes $p -o json | jq '.status.containerStatuses[] | .name, .ready'; \
    done
    ```

    :::note

    The expectation is all container statuses are reporting as `true`. Failure of a readiness probe sets the status to `false`.
    
    :::