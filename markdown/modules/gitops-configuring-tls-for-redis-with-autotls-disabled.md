{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring TLS for Redis with autotls disabled {id="gitops-configuring-tls-for-redis-with-autotls-disabled_{{ context }}"}

You can manually configure TLS encryption for Redis by creating the `argocd-operator-redis-tls` secret with a key and certificate pair. In addition, you must annotate the secret to indicate that it belongs to the appropriate Argo CD instance. The steps to create a certificate and secret vary for instances with High Availability (HA) enabled.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Create an Argo CD instance:
    1.  In the **Administrator** perspective of the web console, use the left navigation panel to go to **Administration** → **CustomResourceDefinitions**.
    1.  Search for `argocds.argoproj.io` and click `ArgoCD` custom resource definition (CRD).
    1.  On the **CustomResourceDefinition details** page, click the **Instances** tab, and then click **Create ArgoCD**.
    1.  Edit or replace the YAML similar to the following example:
        ```yaml title="Example ArgoCD CR with autotls disabled"
        apiVersion: argoproj.io/v1alpha1
        kind: ArgoCD
        metadata:
          name: argocd (1)
          namespace: openshift-gitops (2)
        spec:
          ha:
            enabled: true (3)
        ```
        1.  The name of the Argo CD instance. 
        1.  The namespace where you want to run the Argo CD instance. 
        1.  The flag value that enables the HA feature. If you do not want to enable HA, do not include this line or set the flag value as `false`.
    1.  Click **Create**.
    1.  Verify that the Argo CD pods are ready and running:
        ```terminal
        $ oc get pods -n <namespace> (1)
        ```
        1.  Specify a namespace where the Argo CD instance is running, for example `openshift-gitops`.
        ```terminal title="Example output with HA disabled"
        NAME                                  READY   STATUS    RESTARTS   AGE
        argocd-application-controller-0       1/1     Running   0          26s
        argocd-redis-84b77d4f58-vp6zm         1/1     Running   0          37s
        argocd-repo-server-5b959b57f4-znxjq   1/1     Running   0          37s
        argocd-server-6b8787d686-wv9zh        1/1     Running   0          37s
        ```

        :::note

        The HA-enabled TLS configuration requires a cluster with at least three worker nodes. It can take a few minutes for the output to appear if you have enabled the Argo CD instances with HA configuration.
        
        :::

        ```terminal title="Example output with HA enabled"
        NAME                                       READY   STATUS    RESTARTS   AGE
        argocd-application-controller-0            1/1     Running   0          10m
        argocd-redis-ha-haproxy-669757fdb7-5xg8h   1/1     Running   0          10m
        argocd-redis-ha-server-0                   2/2     Running   0          9m9s
        argocd-redis-ha-server-1                   2/2     Running   0          98s
        argocd-redis-ha-server-2                   2/2     Running   0          53s
        argocd-repo-server-576499d46d-8hgbh        1/1     Running   0          10m
        argocd-server-9486f88b7-dk2ks              1/1     Running   0          10m
        ```
1.  Create a self-signed certificate for the Redis server by using one of the following options depending on your HA configuration:
    *   For the Argo CD instance with HA disabled, run the following command:
        ```terminal
        $ openssl req -new -x509 -sha256 \
          -subj "/C=XX/ST=XX/O=Testing/CN=redis" \
          -reqexts SAN -extensions SAN \
          -config <(printf "\n[SAN]\nsubjectAltName=DNS:argocd-redis.<namespace>.svc.cluster.local\n[req]\ndistinguished_name=req") \ (1)
          -keyout /tmp/redis.key \
          -out /tmp/redis.crt \
          -newkey rsa:4096 \
          -nodes \
          -sha256 \
          -days 10
        ```
        1.  Specify a namespace where the Argo CD instance is running, for example `openshift-gitops`.
        ```terminal title="Example output"
        Generating a RSA private key
        ...............++++
        ............................++++
        writing new private key to '/tmp/redis.key'
        ```
    *   For the Argo CD instance with HA enabled, run the following command:
        ```terminal
        $ openssl req -new -x509 -sha256 \
          -subj "/C=XX/ST=XX/O=Testing/CN=redis" \
          -reqexts SAN -extensions SAN \
          -config <(printf "\n[SAN]\nsubjectAltName=DNS:argocd-redis-ha-haproxy.<namespace>.svc.cluster.local\n[req]\ndistinguished_name=req") \ (1)
          -keyout /tmp/redis-ha.key \
          -out /tmp/redis-ha.crt \
          -newkey rsa:4096 \
          -nodes \
          -sha256 \
          -days 10
        ```
        1.  Specify a namespace where the Argo CD instance is running, for example `openshift-gitops`.
        ```terminal title="Example output"
        Generating a RSA private key
        ...............++++
        ............................++++
        writing new private key to '/tmp/redis-ha.key'
        ```
1.  Verify that the generated certificate and key are available in the `/tmp` directory by running the following commands:
    ```terminal
    $ cd /tmp
    ```
    ```terminal
    $ ls
    ```
    ```terminal title="Example output with HA disabled"
    ...
    redis.crt
    redis.key
    ...
    ```
    ```terminal title="Example output with HA enabled"
    ...
    redis-ha.crt
    redis-ha.key
    ...
    ```
1.  Create the `argocd-operator-redis-tls` secret by using one of the following options depending on your HA configuration:
    *   For the Argo CD instance with HA disabled, run the following command:
        ```terminal
        $ oc create secret tls argocd-operator-redis-tls --key=/tmp/redis.key --cert=/tmp/redis.crt
        ```
    *   For the Argo CD instance with HA enabled, run the following command:
        ```terminal
        $ oc create secret tls argocd-operator-redis-tls --key=/tmp/redis-ha.key --cert=/tmp/redis-ha.crt
        ```
        ```terminal title="Example output"
        secret/argocd-operator-redis-tls created
        ```
1.  Annotate the secret to indicate that it belongs to the Argo CD CR:
    ```terminal
    $ oc annotate secret argocd-operator-redis-tls argocds.argoproj.io/name=<instance-name> (1)
    ```
    1.  Specify a name of the Argo CD instance, for example `argocd`.
    ```terminal title="Example output"
    secret/argocd-operator-redis-tls annotated
    ```
1.  Verify that the Argo CD pods are ready and running:
    ```terminal
    $ oc get pods -n <namespace> (1)
    ```
    1.  Specify a namespace where the Argo CD instance is running, for example `openshift-gitops`.
    ```terminal title="Example output with HA disabled"
    NAME                                  READY   STATUS    RESTARTS   AGE
    argocd-application-controller-0       1/1     Running   0          26s
    argocd-redis-84b77d4f58-vp6zm         1/1     Running   0          37s
    argocd-repo-server-5b959b57f4-znxjq   1/1     Running   0          37s
    argocd-server-6b8787d686-wv9zh        1/1     Running   0          37s
    ```

    :::note

    It can take a few minutes for the output to appear if you have enabled the Argo CD instances with HA configuration.
    
    :::

    ```terminal title="Example output with HA enabled"
    NAME                                       READY   STATUS    RESTARTS   AGE
    argocd-application-controller-0            1/1     Running   0          10m
    argocd-redis-ha-haproxy-669757fdb7-5xg8h   1/1     Running   0          10m
    argocd-redis-ha-server-0                   2/2     Running   0          9m9s
    argocd-redis-ha-server-1                   2/2     Running   0          98s
    argocd-redis-ha-server-2                   2/2     Running   0          53s
    argocd-repo-server-576499d46d-8hgbh        1/1     Running   0          10m
    argocd-server-9486f88b7-dk2ks              1/1     Running   0          10m
    ```