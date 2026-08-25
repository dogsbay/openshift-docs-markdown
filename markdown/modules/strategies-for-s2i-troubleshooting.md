{%- set _mod_docs_content_type = "PROCEDURE" %}
# Strategies for Source-to-Image troubleshooting {id="strategies-for-s2i-troubleshooting_{{ context }}"}

Use Source-to-Image (S2I) to build reproducible, Docker-formatted container images. You can create ready-to-run images by injecting application source code into a container image and assembling a new image. The new image incorporates the base image (the builder) and built source. {._abstract}

**Procedure**

1.  To determine where in the S2I process a failure occurs, you can observe the state of the pods relating to each of the following S2I stages:
    1.  **During the build configuration stage**, a build pod is used to create an application container image from a base image and application source code.
    1.  **During the deployment configuration stage**, a deployment pod is used to deploy application pods from the application container image that was built in the build configuration stage. The deployment pod also deploys other resources such as services and routes. The deployment configuration begins after the build configuration succeeds.
    1.  **After the deployment pod has started the application pods**, application failures can occur within the running application pods. For instance, an application might not behave as expected even though the application pods are in a `Running` state. In this scenario, you can access running application pods to investigate application failures within a pod.
1.  When troubleshooting S2I issues, follow this strategy:
    1.  Monitor build, deployment, and application pod status.
    1.  Determine the stage of the S2I process where the problem occurred.
    1.  Review logs corresponding to the failed stage.