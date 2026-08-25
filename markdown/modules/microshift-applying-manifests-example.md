{%- set _mod_docs_content_type = "PROCEDURE" %}
# Use the manifests example {id="microshift-applying-manifests-example_{{ context }}"}

You can automatically deploy a BusyBox container on {{ microshift_short }} by using `kustomize` manifests in the `/etc/microshift/manifests` directory. {._abstract}

**Procedure**

1.  Create the BusyBox manifest files by running the following commands:
    1.  Define the directory location:
        ```terminal
        $ MANIFEST_DIR=/etc/microshift/manifests
        ```
    1.  Make the directory:
        ```terminal
        $ sudo mkdir -p ${MANIFEST_DIR}
        ```
    1.  Place the YAML file in the directory:
        ```text
        sudo tee ${MANIFEST_DIR}/busybox.yaml &>/dev/null <<EOF
        apiVersion: v1
        kind: Namespace
        metadata:
          name: busybox
        ---
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: busybox
          namespace: busybox-deployment
        spec:
          selector:
            matchLabels:
              app: busybox
          template:
            metadata:
              labels:
                app: busybox
            spec:
              containers:
              - name: busybox
                image: BUSYBOX_IMAGE
                command: [ "/bin/sh", "-c", "while true ; do date; sleep 3600; done;" ]
        EOF
        ```
1.  Next, create the `kustomize` manifest files by running the following commands:
    1.  Place the YAML file in the directory:
        ```text
        sudo tee ${MANIFEST_DIR}/kustomization.yaml &>/dev/null <<EOF
        apiVersion: kustomize.config.k8s.io/v1beta1
        kind: Kustomization
        namespace: busybox
        resources:
          - busybox.yaml
        images:
          - name: BUSYBOX_IMAGE
            newName: busybox:1.35
        EOF
        ```
1.  Restart {{ microshift_short }} to apply the manifests by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```
1.  Apply the manifests and start the `busybox` pod by running the following command:
    ```terminal
    $ oc get pods -n busybox
    ```