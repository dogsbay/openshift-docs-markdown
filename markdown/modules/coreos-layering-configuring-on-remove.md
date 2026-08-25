{%- set _mod_docs_content_type = "CONCEPT" %}
# Removal of an on-cluster custom layered image {id="coreos-layering-configuring-on-remove_{{ context }}"}

You can remove an on-cluster custom layered image from the repository by deleting the `MachineOSBuild` object that created the image. Removing unneeded custom layered images prevents the images from taking up excessive space in your registry. {._abstract}

The credentials provided by the registry push secret that you added to the `MachineOSBuild` object must grant the permission for deleting an image from the registry. If the delete permission is not provided, the image is not removed when you delete the `MachineOSBuild` object.

The custom layered image is not deleted if the image is either currently in use on a node or is desired by the nodes, as indicated by the `machineconfiguration.openshift.io/currentImage` or `machineconfiguration.openshift.io/desiredImage` annotations on the node, which are added to the node when you create the `MachineOSConfig` object.