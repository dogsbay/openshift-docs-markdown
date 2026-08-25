{%- set _mod_docs_content_type = "PROCEDURE" %}
# Extracting the telco hub reference design configuration CRs {id="telco-hub-rds-container_{{ context }}"}

You can extract the complete set of custom resources (CRs) for the telco hub profile from the `openshift-telco-hub-rds-rhel9` container image.
The container image has both the required CRs, and the optional CRs, for the telco hub profile. {._abstract}

**Prerequisites**

*   You have installed `podman`.

**Procedure**

1.  Log on to the container image registry with your credentials by running the following command:
    ```terminal
    $ podman login registry.redhat.io
    ```
1.  Extract the content from the `openshift-telco-hub-rds-rhel9` container image by running the following commands:
    ```terminal
    $ mkdir -p ./out
    ```
    ```terminal
    $ podman run -it registry.redhat.io/openshift4/openshift-telco-hub-rds-rhel9:v4.22 | base64 -d | tar xv -C out
    ```

**Verification**

*   The `out` directory has the following directory structure. You can view the telco hub CRs in the `out/telco-hub-rds/` directory by running the following command:
    ```terminal
    $ tree -L 4 out/telco-hub-rds/
    ```
    ```text title="Example output"
    out/telco-hub-rds/
    ├── configuration
    │   ├── example-overlays-config
    │   │   ├── acm
    │   │   │   ├── acmMirrorRegistryCM-patch.yaml
    │   │   │   ├── kustomization.yaml
    │   │   │   ├── options-agentserviceconfig-patch.yaml
    │   │   │   └── storage-mco-patch.yaml
    │   │   ├── gitops
    │   │   │   ├── argocd-tls-certs-cm-patch.yaml
    │   │   │   ├── init-argocd-app.yaml
    │   │   │   └── kustomization.yaml
    │   │   ├── logging
    │   │   │   ├── cluster-log-forwarder-patch.yaml
    │   │   │   ├── kustomization.yaml
    │   │   │   └── README.md
    │   │   ├── lso
    │   │   │   ├── kustomization.yaml
    │   │   │   └── local-storage-disks-patch.yaml
    │   │   ├── odf
    │   │   │   ├── kustomization.yaml
    │   │   │   └── options-storage-cluster.yaml
    │   │   └── registry
    │   │       ├── catalog-source-image-patch.yaml
    │   │       ├── idms-operator-mirrors-patch.yaml
    │   │       ├── idms-release-mirrors-patch.yaml
    │   │       ├── itms-generic-mirrors-patch.yaml
    │   │       ├── itms-release-mirrors-patch.yaml
    │   │       ├── kustomization.yaml
    │   │       └── registry-ca-patch.yaml
    │   ├── kustomization.yaml
    │   ├── README.md
    │   └── reference-crs
    │       ├── kustomization.yaml
    │       ├── optional
    │       │   ├── logging
    │       │   ├── lso
    │       │   └── odf-internal
    │       └── required
    │           ├── acm
    │           ├── gitops
    │           ├── registry
    │           └── talm
    ├── install
    │   ├── mirror-registry
    │   │   ├── imageset-config.yaml
    │   │   └── README.md
    │   └── openshift
    │       ├── agent-config.yaml
    │       └── install-config.yaml
    └── scripts
        └── check_current_versions.sh
    ```