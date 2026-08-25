{%- set _mod_docs_content_type = "REFERENCE" %}
# iSCSI volume security {id="volume-security-iscsi_{{ context }}"}

For security purposes, when you can request storage with a `PersistentVolumeClaim` object, the claim lives in the user’s namespace only and can only be referenced by a pod within that same namespace. Any attempt to access a persistent volume claim across a namespace causes the pod to fail. {._abstract}

Each iSCSI LUN must be accessible by all nodes in the cluster.

## Challenge Handshake Authentication Protocol (CHAP) configuration {id="_challenge_handshake_authentication_protocol_chap_configuration"}

Optionally, {{ product_title }} can use CHAP to authenticate itself to iSCSI targets:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: iscsi-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  iscsi:
    targetPortal: 10.0.0.1:3260
    iqn: iqn.2016-04.test.com:storage.target00
    lun: 0
    fsType: ext4
    chapAuthDiscovery: true
    chapAuthSession: true
    secretRef:
      name: chap-secret
```
where:


`spec.iscsi.chapAuthDiscovery`
:   When set to `true`, enables CHAP authentication of iSCSI discovery.

`spec.iscsi.chapAuthSession`
:   When set to `true`, enables CHAP authentication of iSCSI session.

`spec.iscsi.secretRef.name`
:   Specifies the name of `Secret` object with user name and password. This `Secret` object must be available in all namespaces that can use the referenced volume.