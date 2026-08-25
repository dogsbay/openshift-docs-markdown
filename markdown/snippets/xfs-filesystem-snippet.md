{%- set _mod_docs_content_type = "SNIPPET" %}


:::note

If you format the volume by using XFS filesystem and the volume is at 100% capacity, the backup fails with a `no space left on device` error. For example:

```terminal
Error: relabel failed /var/lib/kubelet/pods/3ac..34/volumes/ \
kubernetes.io~csi/pvc-684..12c/mount: lsetxattr /var/lib/kubelet/ \
pods/3ac..34/volumes/kubernetes.io~csi/pvc-68..2c/mount/data-xfs-103: \
no space left on device
```

In this scenario, consider resizing the volume or using a different filesystem type, for example, `ext4`, so that the backup completes successfully.

:::