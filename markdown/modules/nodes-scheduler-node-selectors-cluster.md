{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating default cluster-wide node selectors {id="nodes-scheduler-node-selectors-cluster_{{ context }}"}

You can use default cluster-wide node selectors on pods together with labels on nodes to constrain all pods created in a cluster to specific nodes. {._abstract}

With cluster-wide node selectors, when you create a pod in that cluster, {{ product_title }} adds the default node selectors to the pod and schedules
the pod on nodes with matching labels.

You configure cluster-wide node selectors by editing the Scheduler Operator custom resource (CR). You add labels to a node, a compute machine set, or a machine config. Adding the label to the compute machine set ensures that if the node or machine goes down, new nodes have the label. Labels added to a node or machine config do not persist if the node or machine goes down.


:::note

You can add additional key/value pairs to a pod. But you cannot add a different value for a default key.

:::


The following procedure adds a default cluster-wide node selector.

**Procedure**

1.  Edit the Scheduler Operator CR to add the default cluster-wide node selectors:
    ```terminal
    $ oc edit scheduler cluster
    ```
    ```yaml title="Example Scheduler Operator CR with a node selector"
    apiVersion: config.openshift.io/v1
    kind: Scheduler
    metadata:
      name: cluster
    ...
    spec:
      defaultNodeSelector: type=user-node,region=east
      mastersSchedulable: false
    ```

    where:

    `spec.defaultNodeSelector`
    :   Specifies a node selector with the appropriate `<key>:<value>` pairs.

    After making this change, wait for the pods in the `openshift-kube-apiserver` project to redeploy. This can take several minutes. The default cluster-wide node selector does not take effect until the pods redeploy.
1.  Add labels to a node by using a compute machine set or editing the node directly:
    *   Use a compute machine set to add labels to nodes managed by the compute machine set when a node is created:
        1.  Run the following command to add labels to a `MachineSet` object:
            ```terminal
            $ oc patch MachineSet <name> --type='json' -p='[{"op":"add","path":"/spec/template/spec/metadata/labels", "value":{"<key>"="<value>","<key>"="<value>"}}]'  -n openshift-machine-api
            ```

            Add a `<key>/<value>` pair for each label.

            For example:
            ```terminal
            $ oc patch MachineSet ci-ln-l8nry52-f76d1-hl7m7-worker-c --type='json' -p='[{"op":"add","path":"/spec/template/spec/metadata/labels", "value":{"type":"user-node","region":"east"}}]'  -n openshift-machine-api
            ```

            :::tip

            You can alternatively apply the following YAML to add labels to a compute machine set:

            ```yaml
            apiVersion: machine.openshift.io/v1beta1
            kind: MachineSet
            metadata:
              name: <machineset>
              namespace: openshift-machine-api
            spec:
              template:
                spec:
                  metadata:
                    labels:
                      region: "east"
                      type: "user-node"
            ```
            
            :::

        1.  Verify that the labels are added to the `MachineSet` object by using the `oc edit` command:

            For example:
            ```terminal
            $ oc edit MachineSet abc612-msrtw-worker-us-east-1c -n openshift-machine-api
            ```
            ```yaml title="Example MachineSet object"
            apiVersion: machine.openshift.io/v1beta1
            kind: MachineSet
              ...
            spec:
              ...
              template:
                metadata:
              ...
                spec:
                  metadata:
                    labels:
                      region: east
                      type: user-node
              ...
            ```
        1.  Redeploy the nodes associated with that compute machine set by scaling down to `0` and scaling up the nodes:

            For example:
            ```terminal
            $ oc scale --replicas=0 MachineSet ci-ln-l8nry52-f76d1-hl7m7-worker-c -n openshift-machine-api
            ```
            ```terminal
            $ oc scale --replicas=1 MachineSet ci-ln-l8nry52-f76d1-hl7m7-worker-c -n openshift-machine-api
            ```
        1.  When the nodes are ready and available, verify that the label is added to the nodes by using the `oc get` command:
            ```terminal
            $ oc get nodes -l <key>=<value>
            ```

            For example:
            ```terminal
            $ oc get nodes -l type=user-node
            ```
            ```terminal title="Example output"
            NAME                                       STATUS   ROLES    AGE   VERSION
            ci-ln-l8nry52-f76d1-hl7m7-worker-c-vmqzp   Ready    worker   61s   v1.35.4
            ```
    *   Add labels directly to a node:
        1.  Edit the `Node` object for the node:
            ```terminal
            $ oc label nodes <name> <key>=<value>
            ```

            For example, to label a node:
            ```terminal
            $ oc label nodes ci-ln-l8nry52-f76d1-hl7m7-worker-b-tgq49 type=user-node region=east
            ```

            :::tip

            You can alternatively apply the following YAML to add labels to a node:

            ```yaml
            kind: Node
            apiVersion: v1
            metadata:
              name: <node_name>
              labels:
                type: "user-node"
                region: "east"
            ```
            
            :::

        1.  Verify that the labels are added to the node using the `oc get` command:
            ```terminal
            $ oc get nodes -l <key>=<value>,<key>=<value>
            ```

            For example:
            ```terminal
            $ oc get nodes -l type=user-node,region=east
            ```
            ```terminal title="Example output"
            NAME                                       STATUS   ROLES    AGE   VERSION
            ci-ln-l8nry52-f76d1-hl7m7-worker-b-tgq49   Ready    worker   17m   v1.35.4
            ```