{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding image volumes {id="nodes-pods-image-volume-about_{{ context }}"}

You can you use an _image volume_ to mount an Open Container Initiative (OCI)-compliant container image or artifact directly into a pod as a native volume source, making the OCI object accessible to the containers without the need to include them in the base image.  {._abstract}

OCI objects enable users to store and distribute arbitrary files and metadata through OCI-compliant container registries.

By using an image volume in a pod, you can take advantage of the OCI image and distribution specification standards to accomplish several tasks including the following use cases: 

*   You can share configuration files among multiple containers in a pod without needing to include the file in the base image, which minimizes security risks and image size. 
*   In an artificial intelligence environment, you can use image volumes to mount large language model weights or machine learning model weights in a pod alongside a model-server. You can efficiently serve model weights this way without including them in the model-server container image. Therefore, you can separate the model specifications and content from the executables that process them.
*   You can use a public image for a malware scanner and mount it in a volume of private malware signatures, so that you can load those signatures without incorporating the image into a base image, which might not be allowed by the copyright on the public image.
*   You can package and distribute binary artifacts and mount them directly into your pods, allowing you to streamline your CI/CD pipeline. This allows you to maintain a small set of base images by attaching the CI/CD artifacts to the image volumes instead.

To mount an image volume, include a path to the image or artifact in your pod spec with an optional pull policy as described in _Adding an image volume to a pod_.