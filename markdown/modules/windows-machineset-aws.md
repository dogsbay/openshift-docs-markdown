{%- set _mod_docs_content_type = "REFERENCE" %}
# Sample YAML for a Windows MachineSet object on AWS {id="windows-machineset-aws_{{ context }}"}

You can add Windows nodes to an {{ aws_first }} cluster by defining a Windows `MachineSet` object that the Windows Machine Config Operator (WMCO) can react upon. {._abstract}

The following example is a YAML file for creating a `MachineSet` object for {{ aws_short }}.

```yaml
apiVersion: machine.openshift.io/v1beta1
kind: MachineSet
metadata:
  labels:
    machine.openshift.io/cluster-api-cluster: <infrastructure_id>
  name: <infrastructure_id>-windows-worker-<zone>
  namespace: openshift-machine-api
spec:
  replicas: 1
  selector:
    matchLabels:
      machine.openshift.io/cluster-api-cluster: <infrastructure_id>
      machine.openshift.io/cluster-api-machineset: <infrastructure_id>-windows-worker-<zone>
  template:
    metadata:
      labels:
        machine.openshift.io/cluster-api-cluster: <infrastructure_id>
        machine.openshift.io/cluster-api-machine-role: worker
        machine.openshift.io/cluster-api-machine-type: worker
        machine.openshift.io/cluster-api-machineset: <infrastructure_id>-windows-worker-<zone>
        machine.openshift.io/os-id: Windows
    spec:
      metadata:
        labels:
          node-role.kubernetes.io/worker: ""
      providerSpec:
        value:
          ami:
            id: <windows_container_ami>
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
          instanceType: m5a.large
          kind: AWSMachineProviderConfig
          placement:
            availabilityZone: <zone>
            region: <region>
          securityGroups:
          - filters:
            - name: tag:Name
              values:
              - <infrastructure_id>-node
          - filters:
            - name: tag:Name
              values:
              - <infrastructure_id>-lb
          subnet:
            filters:
            - name: tag:Name
              values:
              - <infrastructure_id>-subnet-private-<zone>
          tags:
            - name: kubernetes.io/cluster/<infrastructure_id>
              value: owned
          userDataSecret:
            name: windows-user-data
            namespace: openshift-machine-api
```
where:


`metadata.labels`
:   For the `machine.openshift.io/cluster-api-cluster` label, replace `<infrastructure_id>` with the infrastructure ID that is based on the cluster ID that you set when you provisioned the cluster. You can obtain the infrastructure ID by running the following command:
    ```terminal
    $ oc get -o jsonpath='{.status.infrastructureName}{"\n"}' infrastructure cluster
    ```

`metadata.name`
:   Replace the infrastructure ID, worker label, and zone.

`spec.selector.matchLabels`
:   Replace the parameters for the following labels: 
    *   `machine.openshift.io/cluster-api-cluster`. Replace the infrastructure ID.
    *   `machine.openshift.io/cluster-api-machineset`. Replace the infrastructure ID, worker label, and zone.

`spec.template.metadata.labels`
:   Replace the parameters for the following labels: 
    *   `machine.openshift.io/cluster-api-cluster`. Replace the infrastructure ID.
    *   `machine.openshift.io/cluster-api-machineset`. Replace the infrastructure ID, worker label, and zone. 
    *   `machine.openshift.io/os-id: Windows`. When set to `Windows`, configures the compute machine set as a Windows machine.

`spec.template.spec.metadata.labels`
:    When set to `node-role.kubernetes.io/worker`, configures the node as a compute machine.

`spec.template.spec.providerSpec`
:   Specify the following parameters:
    *   `value.ami.id`. Specify the AMI ID of a supported Windows image with a container runtime installed.

    :::note


    For disconnected clusters, the Windows AMI must have the EC2LaunchV2 agent version 2.0.2107 or later installed. For more information, see the [Install the latest version of EC2Launch v2 (AWS documentation)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2launch-v2-install.html).
    
    :::

    *   `value.iamInstanceProfile.id`. Replace the infrastructure ID.
    *   `value.placement.availabilityZone`. Specifies the AWS zone, such as `us-east-1a`.
    *   `value.placement.region`. Specifies the AWS region, such as `us-east-1`.
    *   `value.securityGroups.filters.values`. Replace the infrastructure ID.
    *   `value.subnet.filters.values`. Replace the infrastructure ID and zone.
    *   `value.tags.name`. Replace the infrastructure ID.
    *   `value.userDataSecret.name`. Specifies the name of the secret in the user data YAML file that is in the `openshift-machine-api` namespace. Use the value that installation program populates in the default compute machine set.