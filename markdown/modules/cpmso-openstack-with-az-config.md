{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ rh_openstack }} clusters that have control plane machines with availability zones after an upgrade {id="cpmso-openstack-with-az-config_{{ context }}"}

For some clusters that run on {{ rh_openstack_first }} that you upgrade, you must manually update machine resources before you can use control plane machine sets if the following configurations are true: {._abstract}

*   The upgraded cluster was created with {{ product_title }} 4.13 or earlier.
*   The cluster infrastructure is installer-provisioned.
*   Control plane machines were distributed across multiple compute availability zones.

To understand why this procedure is necessary, see [Solution #7013893](https://access.redhat.com/solutions/7013893).

**Procedure**

1.  For the `master-1` and `master-2` control plane machines, open the provider specs for editing. For example, to edit the first machine, enter the following command:
    ```terminal
    $ oc edit machine/<cluster_id>-master-1 -n openshift-machine-api
    ```

    where:

    `<cluster_id>`
    :   Specifies the ID of the upgraded cluster.

1.  For the `master-1` and `master-2` control plane machines, edit the value of the `serverGroupName` property in their provider specs to match that of the machine `master-0`.
    ```yaml title="An example {{ rh_openstack }} provider spec"
    providerSpec:
      value:
        apiVersion: machine.openshift.io/v1alpha1
        availabilityZone: az0
          cloudName: openstack
        cloudsSecret:
          name: openstack-cloud-credentials
          namespace: openshift-machine-api
        flavor: m1.xlarge
        image: rhcos-{{ product_version }}
        kind: OpenstackProviderSpec
        metadata:
          creationTimestamp: null
        networks:
        - filter: {}
          subnets:
          - filter:
              name: refarch-lv7q9-nodes
              tags: openshiftClusterID=refarch-lv7q9
        securityGroups:
        - filter: {}
          name: refarch-lv7q9-master
        serverGroupName: refarch-lv7q9-master-az0
        serverMetadata:
          Name: refarch-lv7q9-master
          openshiftClusterID: refarch-lv7q9
        tags:
        - openshiftClusterID=refarch-lv7q9
        trunk: true
        userDataSecret:
          name: master-user-data
    ```

    where:

    `serverGroupName`
    :   Specifies the server group name. This value must match for machines `master-0`, `master-1`, and `master-2`.

    :::note

    If you edited or recreated machine resources after your initial cluster deployment, you might have to adapt these steps for your configuration.

    In your {{ rh_openstack }} cluster, find the server group that your control plane instances are in and use that as the value.
    
    :::


1.  Run the following command to retrieve information about the control plane machine set resource:
    ```terminal
    $ oc describe controlplanemachineset.machine.openshift.io/cluster --namespace openshift-machine-api
    ```
1.  Run the following command to edit the resource:
    ```terminal
    $ oc edit controlplanemachineset.machine.openshift.io/cluster --namespace openshift-machine-api
    ```
1.  For that resource, set the value of the `spec.state` property to `Active` to activate control plane machine sets for your cluster.

    The control plane is now ready to be managed by the Cluster Control Plane Machine Set Operator.