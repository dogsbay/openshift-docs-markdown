{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating redistributable images with UBI {id="security-container-content-universal_{{ context }}"}

You can typically start with a trusted base image that offers the components that are usually provided by the operating system to create containerized applications. These include the libraries, utilities, and other features the application expects to see in the operating system’s file system. {._abstract}

Red&#160;Hat Universal Base Images (UBI) were created to encourage anyone building their own containers to start with one that is made entirely from Red&#160;Hat Enterprise Linux RPM packages and other content. These UBI images are updated regularly to keep up with security patches and free to use and redistribute with container images built to include your own software.

Search the Red Hat Ecosystem Catalog to both find and check the health of different UBI images. As someone creating secure container images, you might be interested in these two general types of UBI images:

*   **UBI**: There are standard UBI images for RHEL 7, 8, and 9 (`ubi7/ubi`, `ubi8/ubi`, and `ubi9/ubi`), and minimal images based on those systems (`ubi7/ubi-minimal`, `ubi8/ubi-mimimal`, and ubi9/ubi-minimal). All of these images are preconfigured to point to free repositories of {{ op_system_base }} software that you can add to the container images you build, using standard `yum` and `dnf` commands.

    :::note

    Red&#160;Hat encourages people to use these images on other distributions, such as Fedora and Ubuntu.
    
    :::

*   **Red&#160;Hat Software Collections**: Search the Red&#160;Hat Ecosystem Catalog for `rhscl/` to find images created to use as base images for specific types of applications. For example, there are Apache httpd (`rhscl/httpd-*`), Python (`rhscl/python-*`), Ruby (`rhscl/ruby-*`), Node.js (`rhscl/nodejs-*`) and Perl (`rhscl/perl-*`) rhscl images.

Remember that while UBI images are freely available and redistributable, Red&#160;Hat support for these images is only available through Red&#160;Hat product subscriptions.