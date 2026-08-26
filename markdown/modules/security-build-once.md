{%- set _mod_docs_content_type = "CONCEPT" %}
# Building once, deploying everywhere {id="security-build-once_{{ context }}"}

You can build container images once in a secure environment and deploy them unchanged across all stages. Using {{ product_title }} as your build standard guarantees this security, ensuring production deployments match verified builds and preventing runtime vulnerabilities. {._abstract}

It is also important to maintain the immutability of your containers. You should not patch running containers, but rebuild and redeploy them.

As your software moves through the stages of building, testing, and production, it is important that the tools making up your software supply chain be trusted. The following figure illustrates the process and tools that could be incorporated into a trusted software supply chain for containerized software:

![trustedsupplychain](/images/trustedsupplychain.png)

{{ product_title }} can be integrated with trusted code repositories (such as GitHub) and development platforms (such as Che) for creating and managing secure code. Unit testing frameworks can validate code quality before builds.

You can inspect your containers for vulnerabilities and configuration issues at build, deploy, or runtime with Red Hat Advanced Cluster Security for Kubernetes. For images stored in Quay, you can use the Clair scanner to inspect images at rest. In addition, certified vulnerability scanners are available in the Red Hat ecosystem catalog.

Monitoring tools can provide ongoing visibility of your containerized applications.

**Additional resources**
{._additional-resources}

*   [Cucumber](https://cucumber.io/)
*   [JUnit](https://junit.org/)
*   [Red Hat Advanced Cluster Security for Kubernetes](https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes)
*   [Clair scanner](https://access.redhat.com/products/red-hat-quay)
*   [Certified vulnerability scanners](https://catalog.redhat.com/software/vulnerability-scanner/search)
*   [Sysdig](https://sysdig.com)