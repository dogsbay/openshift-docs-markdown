{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding taints and tolerations using a compute machine set {id="nodes-scheduler-taints-tolerations-adding-machineset_{{ context }}"}

You can add taints to groups of nodes by using a compute machine set. All nodes associated with the `MachineSet` object are updated with the taint.  {._abstract}

Tolerations respond to taints added by a compute machine set in the same manner as taints added directly to the nodes.

**Procedure**

1.  Add a toleration to a pod by editing the `Pod` spec to include a `tolerations` stanza:
    ```yaml title="Sample pod configuration file with Equal operator"
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    #...
    spec:
      tolerations:
      - key: "key1"
        value: "value1"
        operator: "Equal"
        effect: "NoExecute"
        tolerationSeconds: 3600
    #...
    ```

    where:

    `spec.tolerations`
    :   Specifies the toleration parameters, as described in the **Taint and toleration components** table.

    `spec.tolerations.tolerationSeconds`
    :   Specifies how long a pod can remain bound to a node before being evicted.

    For example:
    ```yaml title="Sample pod configuration file with Exists operator"
    apiVersion: v1
    kind: Pod
    metadata:
      name: my-pod
    #...
    spec:
      tolerations:
      - key: "key1"
        operator: "Exists"
        effect: "NoExecute"
        tolerationSeconds: 3600
    #...
    ```
1.  Add the taint to the `MachineSet` object:
    1.  Edit the `MachineSet` YAML for the nodes you want to taint or you can create a new `MachineSet` object:
        ```terminal
        $ oc edit machineset <machineset>
        ```
    1.  Add the taint to the `spec.template.spec` section:
        ```yaml title="Example taint in a compute machine set specification"
        apiVersion: machine.openshift.io/v1beta1
        kind: MachineSet
        metadata:
          name: my-machineset
        #...
        spec:
        #...
          template:
        #...
            spec:
              taints:
              - effect: NoExecute
                key: key1
                value: value1
        #...
        ```

        This example places a taint that has the key `key1`, value `value1`, and taint effect `NoExecute` on the nodes.
    1.  Scale down the compute machine set to 0:
        ```terminal
        $ oc scale --replicas=0 machineset <machineset> -n openshift-machine-api
        ```

        :::tip

        You can alternatively apply the following YAML to scale the compute machine set:

        ```yaml
        apiVersion: machine.openshift.io/v1beta1
        kind: MachineSet
        metadata:
          name: <machineset>
          namespace: openshift-machine-api
        spec:
          replicas: 0
        ```
        
        :::


        Wait for the machines to be removed.
    1.  Scale up the compute machine set as needed:
        ```terminal
        $ oc scale --replicas=2 machineset <machineset> -n openshift-machine-api
        ```

        Or:
        ```terminal
        $ oc edit machineset <machineset> -n openshift-machine-api
        ```

        Wait for the machines to start. The taint is added to the nodes associated with the `MachineSet` object.