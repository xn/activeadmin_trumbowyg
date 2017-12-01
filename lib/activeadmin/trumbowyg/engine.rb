require 'active_admin'

module ActiveAdmin
  module Trumbowyg
    class Engine < ::Rails::Engine
      engine_name 'activeadmin_trumbowyg'
      initializer "activeadmin_trumbowyg.assets.precompile" do |app|
        app.config.assets.precompile += %w(ui/icons.svg)
      end
    end
  end
end
