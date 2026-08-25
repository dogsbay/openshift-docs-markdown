{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring {{ rh_openstack }} clusters that have machines with root volume availability zones after an upgrade {id="cpmso-openstack-ts-root-volume-azs_{{ context }}"}

For some clusters that run on {{ rh_openstack_first }} that you upgrade, you must manually update machine resources before you can use control plane machine sets if the following configurations are true: {._abstract}

*   The upgraded cluster was created with {{ product_title }} 4.13 or earlier.
*   The cluster infrastructure is installer-provisioned.
*   Machines were distributed across multiple availability zones.
*   Machines were configured to use root volumes for which block storage availability zones were not defined.

To understand why this procedure is necessary, see [Solution #7024383](https://access.redhat.com/solutions/7013893).

**Procedure**

1.  For all control plane machines, edit the provider spec for all control plane machines that match the environment. For example, to edit the machine `master-0`, enter the following command:
    ```terminal
    $ oc edit machine/<cluster_id>-master-0 -n openshift-machine-api
    ```

    where:

    `<cluster_id>`
    :   Specifies the ID of the upgraded cluster.

1.  In the provider spec, set the value of the property `rootVolume.availabilityZone` to the volume of the availability zone you want to use.
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
        image: rhcos-4.14
        kind: OpenstackProviderSpec
        metadata:
          creationTimestamp: null
        networks:
        - filter: {}
          subnets:
          - filter:
              name: refarch-lv7q9-nodes
              tags: openshiftClusterID=refarch-lv7q9
        rootVolume:
            availabilityZone: nova
            diskSize: 30
            sourceUUID: rhcos-4.12
            volumeType: fast-0
        securityGroups:
        - filter: {}
          name: refarch-lv7q9-master
        serverGroupName: refarch-lv7q9-master
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

    `availabilityZone: nova`
    :   Specifies the zone name for the root volume.

    :::note

    If you edited or recreated machine resources after your initial cluster deployment, you might have to adapt these steps for your configuration.

    In your {{ rh_openstack }} cluster, find the availability zone of the root volumes for your machines and use that as the value.
    
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