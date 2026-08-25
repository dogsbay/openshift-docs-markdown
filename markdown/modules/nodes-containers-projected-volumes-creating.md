{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a projected volume for a Pod {id="nodes-containers-projected-volumes-creating_{{ context }}"}

You can create projected volumes to map multiple configuration sources, such as secrets and config maps, into a single directory. Projected volumes centralize sensitive information and environment metadata for your applications into a single directory.   {._abstract}

When creating projected volumes, consider the volume file path situations described in _Understanding projected volumes_.

The following example shows how to use a projected volume to mount an existing secret volume source. The steps can be used to create a user name and password secrets from local files. You then create a pod that runs one container, using a projected volume to mount the secrets into the same shared directory.

The user name and password values can be any valid string that is **base64** encoded.

The following example shows `admin` in base64:

```terminal
$ echo -n "admin" | base64
```

```terminal title="Example output"
YWRtaW4=
```

The following example shows the password `1f2d1e2e67df` in base64:

```terminal
$ echo -n "1f2d1e2e67df" | base64
```

```terminal title="Example output"
MWYyZDFlMmU2N2Rm
```

The following procedure uses a projected volume to mount an existing secret volume source.

**Procedure**

1.  Create the secret:
    1.  Create a YAML file similar to the following, replacing the password and user information as appropriate:
        ```yaml
        apiVersion: v1
        kind: Secret
        metadata:
          name: mysecret
        type: Opaque
        data:
          pass: MWYyZDFlMmU2N2Rm
          user: YWRtaW4=
        ```
    1.  Use the following command to create the secret:
        ```terminal
        $ oc create -f <secrets-filename>
        ```

        For example:
        ```terminal
        $ oc create -f secret.yaml
        ```
        ```terminal title="Example output"
        secret "mysecret" created
        ```
    1.  You can check that the secret was created using the following commands:
        ```terminal
        $ oc get secret <secret-name>
        ```

        For example:
        ```terminal
        $ oc get secret mysecret
        ```
        ```terminal title="Example output"
        NAME       TYPE      DATA      AGE
        mysecret   Opaque    2         17h
        ```
        ```terminal
        $ oc get secret <secret-name> -o yaml
        ```

        For example:
        ```terminal
        $ oc get secret mysecret -o yaml
        ```
        ```yaml
        apiVersion: v1
        data:
          pass: MWYyZDFlMmU2N2Rm
          user: YWRtaW4=
        kind: Secret
        metadata:
          creationTimestamp: 2017-05-30T20:21:38Z
          name: mysecret
          namespace: default
          resourceVersion: "2107"
          selfLink: /api/v1/namespaces/default/secrets/mysecret
          uid: 959e0424-4575-11e7-9f97-fa163e4bd54c
        type: Opaque
        ```
1.  Create a pod with a projected volume.
    1.  Create a YAML file similar to the following, including a `volumes` section:
        ```yaml
        kind: Pod
        metadata:
          name: test-projected-volume
        spec:
          securityContext:
            runAsNonRoot: true
            seccompProfile:
              type: RuntimeDefault
          containers:
          - name: test-projected-volume
            image: busybox
            args:
            - sleep
            - "86400"
            volumeMounts:
            - name: all-in-one
              mountPath: "/projected-volume"
              readOnly: true
            securityContext:
              allowPrivilegeEscalation: false
              capabilities:
                drop: [ALL]
          volumes:
          - name: all-in-one
            projected:
              sources:
              - secret:
                  name: <my_secret>
        ```

        Replace `<my_secret>` with the name of the secret you created.
    1.  Create the pod from the configuration file:
        ```terminal
        $ oc create -f <your_yaml_file>.yaml
        ```

        For example:
        ```terminal
        $ oc create -f secret-pod.yaml
        ```
        ```terminal title="Example output"
        pod "test-projected-volume" created
        ```
1.  Verify that the pod container is running, and then watch for changes to
the pod:
    ```terminal
    $ oc get pod <name>
    ```

    For example:
    ```terminal
    $ oc get pod test-projected-volume
    ```

    The output should appear similar to the following:
    ```terminal title="Example output"
    NAME                    READY     STATUS    RESTARTS   AGE
    test-projected-volume   1/1       Running   0          14s
    ```
1.  In another terminal, use the `oc exec` command to open a shell to the running container:
    ```terminal
    $ oc exec -it <pod> <command>
    ```

    For example:
    ```terminal
    $ oc exec -it test-projected-volume -- /bin/sh
    ```
1.  In your shell, verify that the `projected-volumes` directory contains your projected sources:
    ```terminal
    / # ls
    ```
    ```terminal title="Example output"
    bin               home              root              tmp
    dev               proc              run               usr
    etc               projected-volume  sys               var
    ```