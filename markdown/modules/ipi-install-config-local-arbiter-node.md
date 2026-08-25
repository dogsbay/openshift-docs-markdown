{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a local arbiter node by using installer-provisioned infrastructure {id="ipi-install-config-local-arbiter-node_{{ context }}"}

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
      name: arbiter
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
      baremetal:
    # ...
        hosts:
          - name: cluster-master-0
            role: master
    # ...
          - name: cluster-master-1
            role: master
            ...
          - name: cluster-arbiter-0
            role: arbiter
    # ...
    ```

    where: 

    `arbiter`
    :   Specifies the arbiter machine pool. You must configure this field to deploy a cluster with an arbiter node.

    `arbiter.replicas`
    :   Specifies the value for the `arbiter.replicas` parameter. Set the `replicas` field to `1` for the arbiter pool. You cannot set this field to a value that is greater than 1.

    `arbiter.name`
    :   Specifies a name for the arbiter machine pool.

    `controlPlane`
    :   Specifies the control plane machine pool.

    `controlPlane.replicas`
    :   Specifies the value for the `controlPlane.replicas` parameter. When an arbiter pool is defined, two control plane replicas are valid.

1.  Save the modified `install-config.yaml` file.