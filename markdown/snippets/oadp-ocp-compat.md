{%- set _mod_docs_content_type = "SNIPPET" %}

:::note

If you want to use CSI backup on OCP 4.11 and later, install OADP 1.1._x_.

OADP 1.0._x_ does not support CSI backup on OCP 4.11 and later. OADP 1.0._x_ includes Velero 1.7._x_ and expects the API group `snapshot.storage.k8s.io/v1beta1`, which is not present on OCP 4.11 and later.

:::