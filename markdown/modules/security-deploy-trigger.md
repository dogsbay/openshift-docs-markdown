{%- set _mod_docs_content_type = "CONCEPT" %}
# Controlling container deployments with triggers {id="security-deploy-trigger_{{ context }}"}

If something happens during the build process, or if a vulnerability is discovered after an image has been deployed, you can use tool for automated, policy-based deployment to remediate. You can use triggers to rebuild and replace images, ensuring the immutable containers process, instead of patching running containers, which is not recommended. {._abstract}

![Secure Deployments](/_assets/images/secure_deployments.png)

For example, you build an application by using three container image layers: core, middleware, and applications. An issue is discovered in the core image and that image is rebuilt. After the build is complete, the image is pushed to your OpenShift Container Registry. {{ product_title }} detects that the image has changed and automatically rebuilds and deploys the application image, based on the defined triggers. This change incorporates the fixed libraries and ensures that the production code is identical to the most current image.

You can use the `oc set triggers` command to set a deployment trigger. For example, to set a trigger for a deployment called deployment-example:

```terminal
$ oc set triggers deploy/deployment-example \
    --from-image=example:latest \
    --containers=web
```