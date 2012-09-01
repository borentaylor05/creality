Creality::Application.routes.draw do

resources :users

root to: 'static_pages#home' 

match '/wiki', to: 'static_pages#wiki'

match '/wiki/philosophy', to: 'static_pages#philosophy'

match '/wiki/culture', to: 'static_pages#cultureShift'

match '/new', to: 'users#new'

end