{%- set _mod_docs_content_type = "CONCEPT" %}
# The installation program {id="about-the-installation-program_{{ context }}"}

You can use the installation program to deploy each type of cluster. 
The installation program generates the main assets, such as Ignition config files for the bootstrap, control plane, and compute machines. {._abstract}

You can start an {{ product_title }} cluster with these three machine configurations, provided you correctly configured the infrastructure.

The {{ product_title }} installation program uses a set of targets and dependencies to manage cluster installations. 
The installation program has a set of targets that it must achieve, and each target has a set of dependencies. 
Because each target is only concerned with its own dependencies, the installation program can act to achieve multiple targets in parallel with the ultimate target being a running cluster. 
The installation program recognizes and uses existing components instead of running commands to create them again because the program meets the dependencies.

**Figure 1. {{ product_title }} installation targets and dependencies**

![{{ product_title }} installation targets and dependencies](/_assets/images/targets-and-dependencies.png)