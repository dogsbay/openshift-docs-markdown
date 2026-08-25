---
title: Accessing faster builds with /dev/fuse
---

# Accessing faster builds with /dev/fuse {#nodes-containers-dev-fuse}

You can configure your pods with the `/dev/fuse` device to enable faster and more efficient container image builds, particularly for unprivileged users. This device allows unprivileged pods to mount overlay filesystems, which can be leveraged by tools such as Podman.
