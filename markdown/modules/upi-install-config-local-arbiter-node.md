{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a local arbiter node by using user-provisioned infrastructure {id="upi-install-config-local-arbiter-node_{{ context }}"}

To retain high availability (HA) while reducing infrastructure costs for your cluster, you can configure an {{ product_title }} cluster with two control plane nodes and one local arbiter node. {._abstract}

**Prerequisites**

*   You have downloaded {{ oc_first }} and the installation program.
*   You have logged into the {{ oc_first }}.

**Procedure**

1.  Edit the `install-config.yaml` file to define the arbiter node alongside control plane nodes.
    ```yaml title="Example install-config.yaml configuration for deploying an arbiter node"
    apiVersion: v1
    baseDomain: devcluster.openshift.com
    compute:
      - architecture: amd64
        hyperthreading: Enabled
        name: worker
        platform: {}
        replicas: 0
       
    arbiter: 
      architecture: amd64
      hyperthreading: Enabled
      replicas: 1 
      name: <Specifies a name for the arbiter machine pool>
      platform:
        baremetal: {}
    controlPlane:
      architecture: amd64
      hyperthreading: Enabled
      name: master
      platform:
        baremetal: {}
      replicas: 2 

    platform:
      none: {}

    ```

    Set the `arbiter.replicas` field to `1` for the arbiter pool. You cannot set this field to a value that is greater than 1.

    For `controlPlane.replicas` field, when an arbiter pool is defined, two control plane replicas are valid.
1.  Save the modified `install-config.yaml` file.