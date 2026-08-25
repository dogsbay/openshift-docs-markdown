---
title: Understanding disconnected installation mirroring
---

# Understanding disconnected installation mirroring {#understanding-disconnected-installation-mirroring}

You can use a mirror registry for disconnected installations and to ensure that your clusters only use container images that satisfy your organization’s controls on external content.

Before you install a cluster on infrastructure that you provision in a disconnected environment, you must mirror the required container images into that environment. To mirror container images, you must have a registry for mirroring.

You can use one of the following procedures to mirror your OpenShift Container Platform image repository to your mirror registry:

- "Mirroring images for a disconnected installation by using the oc-mirror plugin v2"
- "Mirroring images for a disconnected installation"

## Additional resources {#additional-resources_understanding-disconnected-installation-mirroring}

- [Mirroring images for a disconnected installation by using the oc-mirror plugin v2](/disconnected/about-installing-oc-mirror-v2#about-installing-oc-mirror-v2)
- [Mirroring images for a disconnected installation](/disconnected/installing-mirroring-installation-images#installing-mirroring-installation-images)
- [Installing an OpenShift Container Platform cluster with the Agent-based Installer](/installing/installing_with_agent_based_installer/installing-with-agent-based-installer#installing-with-agent-based-installer)
