{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating Init Containers {id="nodes-containers-init-creating_{{ context }}"}

You create an init container by creating a pod spec that contains an `initContainers` configuration.  {._abstract}

The following example outlines a simple pod which has two init containers. The first init continer waits for the `myservice` service to complete. After that, the second waits for `mydb` service to complete. After both init containers complete, the pod begins.

**Procedure**

1.  Create the pod for the Init Container:
    1.  Create a YAML file similar to the following:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: myapp-pod
          labels:
            app: myapp
        spec:
          securityContext:
            runAsNonRoot: true
            seccompProfile:
              type: RuntimeDefault
          containers:
          - name: myapp-container
            image: registry.access.redhat.com/ubi9/ubi:latest
            command: ['sh', '-c', 'echo The app is running! && sleep 3600']
            securityContext:
              allowPrivilegeEscalation: false
              capabilities:
                drop: [ALL]
          initContainers:
          - name: init-myservice
            image: registry.access.redhat.com/ubi9/ubi:latest
            command: ['sh', '-c', 'until getent hosts myservice; do echo waiting for myservice; sleep 2; done;']
            securityContext:
              allowPrivilegeEscalation: false
              capabilities:
                drop: [ALL]
          - name: init-mydb
            image: registry.access.redhat.com/ubi9/ubi:latest
            command: ['sh', '-c', 'until getent hosts mydb; do echo waiting for mydb; sleep 2; done;']
            securityContext:
              allowPrivilegeEscalation: false
              capabilities:
                drop: [ALL]
        ```
    1.  Create the pod by using the following command:
        ```terminal
        $ oc create -f myapp.yaml
        ```
    1.  View the status of the pod by using the following command:
        ```terminal
        $ oc get pods
        ```
        ```terminal title="Example output"
        NAME                          READY     STATUS              RESTARTS   AGE
        myapp-pod                     0/1       Init:0/2            0          5s
        ```

        The pod status, `Init:0/2`, indicates it is waiting for the two services.
1.  Create the `myservice` service.
    1.  Create a YAML file similar to the following:
        ```yaml
        kind: Service
        apiVersion: v1
        metadata:
          name: myservice
        spec:
          ports:
          - protocol: TCP
            port: 80
            targetPort: 9376
        ```
    1.  Create the pod by using the following command:
        ```terminal
        $ oc create -f myservice.yaml
        ```
    1.  View the status of the pod by using the following command:
        ```terminal
        $ oc get pods
        ```
        ```terminal title="Example output"
        NAME                          READY     STATUS              RESTARTS   AGE
        myapp-pod                     0/1       Init:1/2            0          5s
        ```

        The pod status, `Init:1/2`, indicates it is waiting for one service, in this case the `mydb` service.
1.  Create the `mydb` service:
    1.  Create a YAML file similar to the following:
        ```yaml
        kind: Service
        apiVersion: v1
        metadata:
          name: mydb
        spec:
          ports:
          - protocol: TCP
            port: 80
            targetPort: 9377
        ```
    1.  Create the pod by using the following command:
        ```terminal
        $ oc create -f mydb.yaml
        ```
    1.  View the status of the pod by using the following command:
        ```terminal
        $ oc get pods
        ```
        ```terminal title="Example output"
        NAME                          READY     STATUS              RESTARTS   AGE
        myapp-pod                     1/1       Running             0          2m
        ```

        The pod status, `Running`, indicates that it is no longer waiting for the services and is running.