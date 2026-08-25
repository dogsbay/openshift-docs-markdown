{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a multi-architecture compute machine set to your AWS cluster {id="multi-architecture-modify-machine-set-aws_{{ context }}"}

After creating a multi-architecture cluster, you can add nodes with different architectures.  {._abstract}

You can add multi-architecture compute machines to a multi-architecture cluster in the following ways:

*   Adding 64-bit x86 compute machines to a cluster that uses 64-bit ARM control plane machines and already includes 64-bit ARM compute machines. In this case, 64-bit x86 is considered the secondary architecture.
*   Adding 64-bit ARM compute machines to a cluster that uses 64-bit x86 control plane machines and already includes 64-bit x86 compute machines. In this case, 64-bit ARM is considered the secondary architecture.

{% include "./snippets/about-multiarch-tuning-operator.md" %}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You used the installation program to create a 64-bit ARM or 64-bit x86 single-architecture cluster with the multi-architecture installer binary.

**Procedure**

1.  Log in to the {{ oc_first }}.
1.  Create a YAML file and add the configuration to create a compute machine set to control the 64-bit ARM or 64-bit x86 compute nodes in your cluster.
    ```yaml title="Example MachineSet object for an {{ aws_short }} 64-bit ARM or x86 compute node"
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    metadata:
      labels:
        machine.openshift.io/cluster-api-cluster: <infrastructure_id>
      name: <infrastructure_id>-aws-machine-set-0
      namespace: openshift-machine-api
    spec:
      replicas: 1
      selector:
        matchLabels:
          machine.openshift.io/cluster-api-cluster: <infrastructure_id>
          machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>-<zone>
      template:
        metadata:
          labels:
            machine.openshift.io/cluster-api-cluster: <infrastructure_id>
            machine.openshift.io/cluster-api-machine-role: <role>
            machine.openshift.io/cluster-api-machine-type: <role>
            machine.openshift.io/cluster-api-machineset: <infrastructure_id>-<role>-<zone>
        spec:
          metadata:
            labels:
              node-role.kubernetes.io/<role>: ""
          providerSpec:
            value:
              ami:
                id: ami-02a574449d4f4d280
              apiVersion: awsproviderconfig.openshift.io/v1beta1
              blockDevices:
                - ebs:
                    iops: 0
                    volumeSize: 120
                    volumeType: gp2
              credentialsSecret:
                name: aws-cloud-credentials
              deviceIndex: 0
              iamInstanceProfile:
                id: <infrastructure_id>-worker-profile
              instanceType: m6g.xlarge
              kind: AWSMachineProviderConfig
              placement:
                availabilityZone: us-east-1a
                region: <region>
              securityGroups:
                - filters:
                    - name: tag:Name
                      values:
                        - <infrastructure_id>-node
              subnet:
                filters:
                  - name: tag:Name
                    values:
                      - <infrastructure_id>-subnet-private-<zone>
              tags:
                - name: kubernetes.io/cluster/<infrastructure_id>
                  value: owned
                - name: <custom_tag_name>
                  value: <custom_tag_value>
              userDataSecret:
                name: worker-user-data
    ```

    where:

    `<infrastructure_id>`
    :   Specifies the infrastructure ID that is based on the cluster ID that you set when you provisioned the cluster. If you have the {{ oc_first }} installed, you can obtain the infrastructure ID by running the following command:
    ```terminal
    $ oc get -o jsonpath="{.status.infrastructureName}{'\n'}" infrastructure cluster
    ```

    `<role>-<zone>`
    :   Specifies the infrastructure ID, role node label, and zone.

    `<role>`
    :   Specifies the role node label to add.

    `ami.id`
    :   Specifies a {{ op_system_first }} Amazon Machine Image (AMI) for your AWS region for the nodes. The {{ op_system }} AMI must be compatible with the machine architecture.
    ```terminal
    $ oc get configmap/coreos-bootimages \
    	  -n openshift-machine-config-operator \
    	  -o jsonpath='{.data.stream}' | jq \
    	  -r '.architectures.<arch>.images.aws.regions."<region>".image'
    ```

    `instanceType`
    :   Specifies a machine type that aligns with the CPU architecture of the chosen AMI. For more information, see "Tested instance types for AWS 64-bit ARM".

    `availabilityZone`
    :   Specifies the zone. For example, `us-east-1a`. Ensure that the zone you select has machines with the required architecture.

    `region`
    :   Specifies the region. For example, `us-east-1`. Ensure that the zone you select has machines with the required architecture.

1.  Create the compute machine set by running the following command:
    ```terminal
    $ oc create -f <file_name>
    ```
    *   Replace `<file_name>` with the name of the YAML file with compute machine set configuration. For example: `aws-arm64-machine-set-0.yaml`, or `aws-amd64-machine-set-0.yaml`.

**Verification**

1.  Verify that the new machines are running by running the following command:
    ```terminal
    $ oc get machineset -n openshift-machine-api
    ```

    The output must include the machine set that you created.
    ```terminal title="Example output"
    NAME                                                DESIRED  CURRENT  READY  AVAILABLE  AGE
    <infrastructure_id>-aws-machine-set-0                   2        2      2          2  10m
    ```
1.  You can check if the nodes are ready and schedulable by running the following command:
    ```terminal
    $ oc get nodes
    ```