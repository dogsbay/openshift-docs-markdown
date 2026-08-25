{% if context == "openshift-sdn-enabling-multicast" %}
{%- set namespace = "netnamespace" -%}
{%- set annotation = "netnamespace.network.openshift.io/multicast-enabled=true" -%}
{% endif %}
{% if context == "ovn-kubernetes-enabling-multicast" %}
{%- set namespace = "namespace" -%}
{%- set annotation = "k8s.ovn.org/multicast-enabled=true" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling multicast between pods {id="nw-enabling-multicast_{{ context }}"}

To enable multicast between pods in a project, you can add the `k8s.ovn.org/multicast-enabled` annotation to the namespace by using the `oc annotate` command or a namespace manifest. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   You must log in to the cluster with a user that has the `cluster-admin`
{%- if openshift_rosa or openshift_dedicated %}
or the `dedicated-admin`
{%- endif %}
role.

**Procedure**

*   Run the following command to enable multicast for a project. Replace `<namespace>` with the namespace for the project you want to enable multicast for.
    ```terminal {minja}
    $ oc annotate {{ namespace }} <namespace> \
        {{ annotation }}
    ```
{% if context == "ovn-kubernetes-enabling-multicast" %}

    :::tip

    You can alternatively apply the following YAML to add the annotation:

    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: <namespace>
      annotations:
        k8s.ovn.org/multicast-enabled: "true"
    ```
    
    :::

{% endif %}

**Verification**

To verify that multicast is enabled for a project, complete the following procedure:

1.  Change your current project to the project that you enabled multicast for. Replace `<project>` with the project name.
    ```terminal
    $ oc project <project>
    ```
1.  Create a pod to act as a multicast receiver:
    ```terminal
    $ cat <<EOF| oc create -f -
    apiVersion: v1
    kind: Pod
    metadata:
      name: mlistener
      labels:
        app: multicast-verify
    spec:
      containers:
        - name: mlistener
          image: registry.access.redhat.com/ubi9
          command: ["/bin/sh", "-c"]
          args:
            ["dnf -y install socat hostname && sleep inf"]
          ports:
            - containerPort: 30102
              name: mlistener
              protocol: UDP
    EOF
    ```
1.  Create a pod to act as a multicast sender:
    ```terminal
    $ cat <<EOF| oc create -f -
    apiVersion: v1
    kind: Pod
    metadata:
      name: msender
      labels:
        app: multicast-verify
    spec:
      containers:
        - name: msender
          image: registry.access.redhat.com/ubi9
          command: ["/bin/sh", "-c"]
          args:
            ["dnf -y install socat && sleep inf"]
    EOF
    ```
1.  In a new terminal window or tab, start the multicast listener.
    1.  Get the IP address for the Pod:
        ```terminal
        $ POD_IP=$(oc get pods mlistener -o jsonpath='{.status.podIP}')
        ```
    1.  Start the multicast listener by entering the following command:
        ```terminal
        $ oc exec mlistener -i -t -- \
            socat UDP4-RECVFROM:30102,ip-add-membership=224.1.0.1:$POD_IP,fork EXEC:hostname
        ```
1.  Start the multicast transmitter.
    1.  Get the pod network IP address range:
        ```terminal
        $ CIDR=$(oc get Network.config.openshift.io cluster \
            -o jsonpath='{.status.clusterNetwork[0].cidr}')
        ```
    1.  To send a multicast message, enter the following command:
        ```terminal
        $ oc exec msender -i -t -- \
            /bin/bash -c "echo | socat STDIO UDP4-DATAGRAM:224.1.0.1:30102,range=$CIDR,ip-multicast-ttl=64"
        ```

        If multicast is working, the previous command returns the following output:
        ```text
        mlistener
        ```

{% if context == "openshift-sdn-enabling-multicast" %}
{%- set annotation = "" -%}
{%- set namespace = "" -%}
{% endif %}
{% if context == "ovn-kubernetes-enabling-multicast" %}
{%- set annotation = "" -%}
{%- set namespace = "" -%}
{% endif %}