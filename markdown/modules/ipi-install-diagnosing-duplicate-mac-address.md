{%- set _mod_docs_content_type = "PROCEDURE" %}
# Diagnosing a duplicate MAC address when provisioning a new host in the cluster {id="ipi-install-diagnosing-duplicate-mac-address_{{ context }}"}

You can diagnose a duplicate MAC address issue by examining bare-metal host registration errors in the cluster to identify and resolve conflicts preventing new node provisioning. {._abstract}

You can diagnose a duplicate MAC address by examining the bare-metal hosts that are running in the `openshift-machine-api` namespace.

**Prerequisites**

*   Install an {{ product_title }} cluster on bare metal.
*   Install the {{ product_title }} CLI `oc`.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Get the bare-metal hosts running in the `openshift-machine-api` namespace:
    ```terminal
    $ oc get bmh -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                 STATUS   PROVISIONING STATUS      CONSUMER
    openshift-master-0   OK       externally provisioned   openshift-zpwpq-master-0
    openshift-master-1   OK       externally provisioned   openshift-zpwpq-master-1
    openshift-master-2   OK       externally provisioned   openshift-zpwpq-master-2
    openshift-worker-0   OK       provisioned              openshift-zpwpq-worker-0-lv84n
    openshift-worker-1   OK       provisioned              openshift-zpwpq-worker-0-zd8lm
    openshift-worker-2   error    registering
    ```
1.  To see more detailed information about the status of the failing host, run the following command replacing `<bare_metal_host_name>` with the name of the host:
    ```terminal
    $ oc get -n openshift-machine-api bmh <bare_metal_host_name> -o yaml
    ```
    ```yaml title="Example output"
    ...
    status:
      errorCount: 12
      errorMessage: MAC address b4:96:91:1d:7c:20 conflicts with existing node openshift-worker-1
      errorType: registration error
    ...
    ```