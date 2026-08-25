{%- set _mod_docs_content_type = "PROCEDURE" %}
{% include "./_attributes/common-attributes.md" %}
# Adding a GPU node to an existing {{ product_title }} cluster {id="nvidia-gpu-gcp-adding-a-gpu-node_{{ context }}"}

You can copy and modify a default compute machine set configuration to create a GPU-enabled machine set and machines for the {{ gcp_short }} provider. This assists compute-intensive workloads that require hardware acceleration. {._abstract}

The following table lists the validated instance types:

| Instance type | NVIDIA GPU accelerator | Maximum number of GPUs | Architecture |
| --- | --- | --- | --- |
| `a2-highgpu-1g` | A100 | 1 | x86 |
| `n1-standard-4` | T4 | 1 | x86 |

**Procedure**

1.  Make a copy of an existing `MachineSet` configuration.
1.  In the new copy, change the machine set `name` in `metadata.name` and in both instances of `machine.openshift.io/cluster-api-machineset`.
1.  Change the instance type to add the following two lines to the newly copied `MachineSet` configuration:
    ```
    machineType: a2-highgpu-1g
    onHostMaintenance: Terminate
    ```
    ```json title="Example a2-highgpu-1g.json file"
    {
        "apiVersion": "machine.openshift.io/v1beta1",
        "kind": "MachineSet",
        "metadata": {
            "annotations": {
                "machine.openshift.io/GPU": "0",
                "machine.openshift.io/memoryMb": "16384",
                "machine.openshift.io/vCPU": "4"
            },
            "creationTimestamp": "2023-01-13T17:11:02Z",
            "generation": 1,
            "labels": {
                "machine.openshift.io/cluster-api-cluster": "myclustername-2pt9p"
            },
            "name": "myclustername-2pt9p-worker-gpu-a",
            "namespace": "openshift-machine-api",
            "resourceVersion": "20185",
            "uid": "2daf4712-733e-4399-b4b4-d43cb1ed32bd"
        },
        "spec": {
            "replicas": 1,
            "selector": {
                "matchLabels": {
                    "machine.openshift.io/cluster-api-cluster": "myclustername-2pt9p",
                    "machine.openshift.io/cluster-api-machineset": "myclustername-2pt9p-worker-gpu-a"
                }
            },
            "template": {
                "metadata": {
                    "labels": {
                        "machine.openshift.io/cluster-api-cluster": "myclustername-2pt9p",
                        "machine.openshift.io/cluster-api-machine-role": "worker",
                        "machine.openshift.io/cluster-api-machine-type": "worker",
                        "machine.openshift.io/cluster-api-machineset": "myclustername-2pt9p-worker-gpu-a"
                    }
                },
                "spec": {
                    "lifecycleHooks": {},
                    "metadata": {},
                    "providerSpec": {
                        "value": {
                            "apiVersion": "machine.openshift.io/v1beta1",
                            "canIPForward": false,
                            "credentialsSecret": {
                                "name": "gcp-cloud-credentials"
                            },
                            "deletionProtection": false,
                            "disks": [
                                {
                                    "autoDelete": true,
                                    "boot": true,
                                    "image": "projects/rhcos-cloud/global/images/rhcos-412-86-202212081411-0-gcp-x86-64",
                                    "labels": null,
                                    "sizeGb": 128,
                                    "type": "pd-ssd"
                                }
                            ],
                            "kind": "GCPMachineProviderSpec",
                            "machineType": "a2-highgpu-1g",
                            "onHostMaintenance": "Terminate",
                            "metadata": {
                                "creationTimestamp": null
                            },
                            "networkInterfaces": [
                                {
                                    "network": "myclustername-2pt9p-network",
                                    "subnetwork": "myclustername-2pt9p-worker-subnet"
                                }
                            ],
                            "preemptible": true,
                            "projectID": "myteam",
                            "region": "us-central1",
                            "serviceAccounts": [
                                {
                                    "email": "myclustername-2pt9p-w@myteam.iam.gserviceaccount.com",
                                    "scopes": [
                                        "https://www.googleapis.com/auth/cloud-platform"
                                    ]
                                }
                            ],
                            "tags": [
                                "myclustername-2pt9p-worker"
                            ],
                            "userDataSecret": {
                                "name": "worker-user-data"
                            },
                            "zone": "us-central1-a"
                        }
                    }
                }
            }
        },
        "status": {
            "availableReplicas": 1,
            "fullyLabeledReplicas": 1,
            "observedGeneration": 1,
            "readyReplicas": 1,
            "replicas": 1
        }
    }
    ```
1.  View the existing nodes, machines, and machine sets by running the following command. Note that each node is an instance of a machine definition with a specific {{ gcp_short }} region and {{ product_title }} role.
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME                                                             STATUS     ROLES                  AGE     VERSION
    myclustername-2pt9p-master-0.c.openshift-qe.internal             Ready      control-plane,master   8h      v1.35.4
    myclustername-2pt9p-master-1.c.openshift-qe.internal             Ready      control-plane,master   8h      v1.35.4
    myclustername-2pt9p-master-2.c.openshift-qe.internal             Ready      control-plane,master   8h      v1.35.4
    myclustername-2pt9p-worker-a-mxtnz.c.openshift-qe.internal       Ready      worker                 8h      v1.35.4
    myclustername-2pt9p-worker-b-9pzzn.c.openshift-qe.internal       Ready      worker                 8h      v1.35.4
    myclustername-2pt9p-worker-c-6pbg6.c.openshift-qe.internal       Ready      worker                 8h      v1.35.4
    myclustername-2pt9p-worker-gpu-a-wxcr6.c.openshift-qe.internal   Ready      worker                 4h35m   v1.35.4
    ```
1.  View the machines and machine sets that exist in the `openshift-machine-api` namespace by running the following command. Each compute machine set is associated with a different availability zone within the {{ gcp_short }} region. The installation program automatically load balances compute machines across availability zones.
    ```terminal
    $ oc get machinesets -n openshift-machine-api
    ```
    ```terminal title="Example output"
    NAME                               DESIRED   CURRENT   READY   AVAILABLE   AGE
    myclustername-2pt9p-worker-a       1         1         1       1           8h
    myclustername-2pt9p-worker-b       1         1         1       1           8h
    myclustername-2pt9p-worker-c       1         1                             8h
    myclustername-2pt9p-worker-f       0         0                             8h
    ```
1.  View the machines that exist in the `openshift-machine-api` namespace by running the following command. You can only configure one compute machine per set, although you can scale a compute machine set to add a node in a particular region and zone.
    ```terminal
    $ oc get machines -n openshift-machine-api | grep worker
    ```
    ```terminal title="Example output"
    myclustername-2pt9p-worker-a-mxtnz       Running   n2-standard-4   us-central1   us-central1-a   8h
    myclustername-2pt9p-worker-b-9pzzn       Running   n2-standard-4   us-central1   us-central1-b   8h
    myclustername-2pt9p-worker-c-6pbg6       Running   n2-standard-4   us-central1   us-central1-c   8h
    ```
1.  Make a copy of one of the existing compute `MachineSet` definitions and output the result to a JSON file by running the following command. This will be the basis for the GPU-enabled compute machine set definition.
    ```terminal
    $ oc get machineset myclustername-2pt9p-worker-a -n openshift-machine-api -o json  > <output_file.json>
    ```
1.  Edit the JSON file to make the following changes to the new `MachineSet` definition:
    *   Rename the machine set `name` by inserting the substring `gpu` in `metadata.name` and in both instances of `machine.openshift.io/cluster-api-machineset`.
    *   Change the `machineType` of the new `MachineSet` definition to `a2-highgpu-1g`, which includes an NVIDIA A100 GPU.
        ```terminal {minja}
        jq .spec.template.spec.providerSpec.value.machineType ocp_{{ product_version }}_machineset-a2-highgpu-1g.json

        "a2-highgpu-1g"
        ```

        The `<output_file.json>` file is saved as `ocp_{{ product_version }}_machineset-a2-highgpu-1g.json`{minja}.
1.  Update the following fields in `ocp_{{ product_version }}_machineset-a2-highgpu-1g.json`{minja}:
    *   Change `.metadata.name` to a name containing `gpu`.
    *   Change `.spec.selector.matchLabels["machine.openshift.io/cluster-api-machineset"]` to
    match the new `.metadata.name`.
    *   Change `.spec.template.metadata.labels["machine.openshift.io/cluster-api-machineset"]`
    to match the new `.metadata.name`.
    *   Change `.spec.template.spec.providerSpec.value.MachineType` to `a2-highgpu-1g`.
    *   Add the following line under `machineType`: `"onHostMaintenance": "Terminate". For example:
        ```json
        "machineType": "a2-highgpu-1g",
        "onHostMaintenance": "Terminate",
        ```
1.  To verify your changes, perform a `diff` of the original compute definition and the new GPU-enabled node definition by running the following command:
    ```terminal {minja}
    $ oc get machineset/myclustername-2pt9p-worker-a -n openshift-machine-api -o json | diff ocp_{{ product_version }}_machineset-a2-highgpu-1g.json -
    ```
    ```terminal title="Example output"
    15c15
    <         "name": "myclustername-2pt9p-worker-gpu-a",
    ---
    >         "name": "myclustername-2pt9p-worker-a",
    25c25
    <                 "machine.openshift.io/cluster-api-machineset": "myclustername-2pt9p-worker-gpu-a"
    ---
    >                 "machine.openshift.io/cluster-api-machineset": "myclustername-2pt9p-worker-a"
    34c34
    <                     "machine.openshift.io/cluster-api-machineset": "myclustername-2pt9p-worker-gpu-a"
    ---
    >                     "machine.openshift.io/cluster-api-machineset": "myclustername-2pt9p-worker-a"
    59,60c59
    <                         "machineType": "a2-highgpu-1g",
    <                         "onHostMaintenance": "Terminate",
    ---
    >                         "machineType": "n2-standard-4",
    ```
1.  Create the GPU-enabled compute machine set from the definition file by running the following command:
    ```terminal {minja}
    $ oc create -f ocp_{{ product_version }}_machineset-a2-highgpu-1g.json
    ```
    ```terminal title="Example output"
    machineset.machine.openshift.io/myclustername-2pt9p-worker-gpu-a created
    ```

**Verification**

1.  View the machine set you created by running the following command:
    ```terminal
    $ oc -n openshift-machine-api get machinesets | grep gpu
    ```

    The `MachineSet` replica count is set to `1` so a new `Machine` object is created automatically.

    ```terminal title="Example output"
    myclustername-2pt9p-worker-gpu-a   1         1         1       1           5h24m
    ```
1.  View the `Machine` object that the machine set created by running the following command:
    ```terminal
    $ oc -n openshift-machine-api get machines | grep gpu
    ```
    ```terminal title="Example output"
    myclustername-2pt9p-worker-gpu-a-wxcr6   Running   a2-highgpu-1g   us-central1   us-central1-a   5h25m
    ```


    :::note

    Note that there is no need to specify a namespace for the node. The node definition is cluster scoped.
    
    :::