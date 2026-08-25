{%- set _mod_docs_content_type = "SNIPPET" %}
```yaml
apiVersion: ran.openshift.io/v1
kind: PolicyGenTemplate
metadata:
  name: "du-upgrade"
  namespace: "ztp-group-du-sno"
spec:
  bindingRules:
    group-du-sno: ""
  mcp: "master"
  remediationAction: inform
  sourceFiles:
    - fileName: ImageSignature.yaml
      policyName: "platform-upgrade-prep"
      binaryData:
        ${{ DIGEST_ALGO }}-${{ DIGEST_ENCODED }}: ${{ SIGNATURE_BASE64 }}
    - fileName: DisconnectedICSP.yaml
      policyName: "platform-upgrade-prep"
      metadata:
        name: disconnected-internal-icsp-for-ocp
      spec:
        repositoryDigestMirrors:
          - mirrors:
            - quay-intern.example.com/ocp4/openshift-release-dev
            source: quay.io/openshift-release-dev/ocp-release
          - mirrors:
            - quay-intern.example.com/ocp4/openshift-release-dev
            source: quay.io/openshift-release-dev/ocp-v4.0-art-dev
    - fileName: ClusterVersion.yaml
      policyName: "platform-upgrade"
      metadata:
        name: version
      spec:
        channel: "stable-{{ product_version }}"
        upstream: http://upgrade.example.com/images/upgrade-graph_stable-{{ product_version }}
        desiredUpdate:
          version: {{ product_version }}.4
      status:
        history:
          - version: {{ product_version }}.4
            state: "Completed"
```

*   `ImageSignature.yaml` - The `ConfigMap` CR contains the signature of the required release image to update to.
*   `${{ DIGEST_ALGO }}-${{ DIGEST_ENCODED }}: ${{ SIGNATURE_BASE64 }}` - Shows the image signature of the required {{ product_title }} release. Get the signature from the `checksum-${{ OCP_RELEASE_NUMBER }}.yaml` file you saved when following the procedures in the "Setting up the environment" section.
*   `repositoryDigestMirrors` - Shows the mirror repository that contains the required {{ product_title }} image. Get the mirrors from the `imageContentSources.yaml` file that you saved when following the procedures in the "Setting up the environment" section.
*   `ClusterVersion.yaml` - Shows the `ClusterVersion` CR to trigger the update. The `channel`, `upstream`, and `desiredVersion` fields are all required for image precaching.