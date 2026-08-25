{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding the verification of container images lacking verifiable signatures {id="containers-signature-verify-artifacts_{{ context }}"}

Each {{ product_title }} release image is immutable and signed with a Red Hat production key. During cluster update or installation, a release image might deploy container images without a verifiable signature. The signature on the release image validates all release contents transitively. {._abstract}

For example, the image references lacking a verifiable signature are contained in the signed {{ product_title }} release image:

```terminal title="Example release info output"
$ oc adm release info quay.io/openshift-release-dev/ocp-release@sha256:2309578b68c5666dad62aed696f1f9d778ae1a089ee461060ba7b9514b7ca417 -o pullspec
quay.io/openshift-release-dev/ocp-v4.0-art-dev@sha256:9aafb914d5d7d0dec4edd800d02f811d7383a7d49e500af548eab5d00c1bffdb
```

The first line specifies the signed release image SHA. The second line specifies a container image lacking a verifiable signature that is included in the release.

## Automated verification during updates {id="containers-signature-verification-automatic_{{ context }}"}
Verification of signatures is automatic. The OpenShift Cluster Version Operator (CVO) verifies signatures on the release images during an {{ product_title }} update. This is an internal process. An {{ product_title }} installation or update fails if the automated verification fails.

Verification of signatures can also be done manually using the `skopeo` command-line utility.