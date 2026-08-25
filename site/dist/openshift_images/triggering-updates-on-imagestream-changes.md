---
title: Triggering updates on image stream changes
---

# Triggering updates on image stream changes {#triggering-updates-on-imagestream-changes}

When image stream tags update in OpenShift Container Platform, the platform automatically rolls out new images to deployments and builds that reference those tags. You configure this automatic triggering behavior differently depending on the type of resource that uses the image stream.

## Resources {#openshift-resources}

OpenShift Container Platform `DeploymentConfig` and `BuildConfig` resources can be automatically triggered by changes to image stream tags. When triggered, these resources use the new image value referenced by the updated image stream tag.
