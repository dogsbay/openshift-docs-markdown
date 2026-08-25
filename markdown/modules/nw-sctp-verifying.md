{%- set image = "registry.access.redhat.com/ubi9/ubi" -%}

{% if openshift_origin %}
{%- set image = "fedora:31" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying Stream Control Transmission Protocol (SCTP) is enabled {id="nw-sctp-verifying_{{ context }}"}

You can verify that SCTP is working on a cluster by creating a pod with an application that listens for SCTP traffic, associating it with a service, and then connecting to the exposed service.

**Prerequisites**

*   Access to the internet from the cluster to install the `nc` package.
*   Install the OpenShift CLI (`oc`).
*   Access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Create a pod starts an SCTP listener:
    1.  Create a file named `sctp-server.yaml` that defines a pod with the following YAML:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: sctpserver
          labels:
            app: sctpserver
        spec:
          containers:
            - name: sctpserver
              image: {{ image }}
              command: ["/bin/sh", "-c"]
              args:
                ["dnf install -y nc && sleep inf"]
              ports:
                - containerPort: 30102
                  name: sctpserver
                  protocol: SCTP
        ```
    1.  Create the pod by entering the following command:
        ```terminal
        $ oc create -f sctp-server.yaml
        ```
1.  Create a service for the SCTP listener pod.
    1.  Create a file named `sctp-service.yaml` that defines a service with the following YAML:
        ```yaml
        apiVersion: v1
        kind: Service
        metadata:
          name: sctpservice
          labels:
            app: sctpserver
        spec:
          type: NodePort
          selector:
            app: sctpserver
          ports:
            - name: sctpserver
              protocol: SCTP
              port: 30102
              targetPort: 30102
        ```
    1.  To create the service, enter the following command:
        ```terminal
        $ oc create -f sctp-service.yaml
        ```
1.  Create a pod for the SCTP client.
    1.  Create a file named `sctp-client.yaml` with the following YAML:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: sctpclient
          labels:
            app: sctpclient
        spec:
          containers:
            - name: sctpclient
              image: {{ image }}
              command: ["/bin/sh", "-c"]
              args:
                ["dnf install -y nc && sleep inf"]
        ```
    1.  To create the `Pod` object, enter the following command:
        ```terminal
        $ oc apply -f sctp-client.yaml
        ```
1.  Run an SCTP listener on the server.
    1.  To connect to the server pod, enter the following command:
        ```terminal
        $ oc rsh sctpserver
        ```
    1.  To start the SCTP listener, enter the following command:
        ```terminal
        $ nc -l 30102 --sctp
        ```
1.  Connect to the SCTP listener on the server.
    1.  Open a new terminal window or tab in your terminal program.
    1.  Obtain the IP address of the `sctpservice` service. Enter the following command:
        ```terminal
        $ oc get services sctpservice -o go-template='{{.spec.clusterIP}}{{"\n"}}'
        ```
    1.  To connect to the client pod, enter the following command:
        ```terminal
        $ oc rsh sctpclient
        ```
    1.  To start the SCTP client, enter the following command. Replace `<cluster_IP>` with the cluster IP address of the `sctpservice` service.
        ```terminal
        # nc <cluster_IP> 30102 --sctp
        ```